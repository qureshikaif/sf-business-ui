"use client";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slideData = [
  {
    id: 1,
    backgroundImage:
      "https://www.venturedive.com/wp-content/uploads/2023/06/careem-banner-background-2.jpg",
    image:
      "https://www.venturedive.com/wp-content/uploads/2023/08/Vectary-texture-2.png",
    logo: "https://www.venturedive.com/wp-content/uploads/2023/06/careem-logo-white-2.png",
    title: "John Doe",
    description:
      "SF Business solutions is a hassle-free one-stop bookkeeping solution for your daily needs.",
    caseStudyUrl: "https://www.venturedive.com/clients/careem-e-hail/",
  },
  {
    id: 2,
    backgroundImage:
      "https://www.venturedive.com/wp-content/uploads/2023/06/careem-banner-background-2.jpg",
    image:
      "https://www.venturedive.com/wp-content/uploads/2023/08/Vectary-texture-2.png",
    logo: "https://www.venturedive.com/wp-content/uploads/2023/06/careem-logo-white-2.png",
    title: "Jane Smith",
    description:
      "SF Business solutions is a hassle-free one-stop accounting solution for your daily needs.",
    caseStudyUrl: "https://www.venturedive.com/clients/careem-e-hail/",
  },
];

const ClientsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (prevCurrentSlide) => (prevCurrentSlide + 1) % slideData.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevCurrentSlide) =>
        (prevCurrentSlide - 1 + slideData.length) % slideData.length
    );
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-5">
        <div className="relative h-[700px] lg:h-[500px] overflow-hidden rounded-lg">
          {slideData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } w-full h-full bg-blue-600`}
              style={{
                // backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-wrap items-center justify-center h-full text-white">
                <div className="w-full md:w-1/3 p-8">
                  {/* <Image
                    src={slide.image}
                    alt={slide.title}
                    width={200}
                    height={200}
                    className="mx-auto"
                  /> */}
                  <UserIcon size={150} className="mx-auto" />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  {/* <Image
                    src={slide.logo}
                    alt={slide.title}
                    width={100}
                    height={50}
                    className="mx-auto"
                  /> */}
                  <h2 className="text-3xl font-bold my-4">{slide.title}</h2>
                  <p>{slide.description}</p>
                  <Link
                    href={slide.caseStudyUrl}
                    className="mt-4 inline-block bg-blue-500 hover:shadow-xl text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    View Review
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
