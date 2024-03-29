import { Button } from "./ui/button";
import ServicesHeroImage from "@/../public/images/services-hero.png";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className="lg:h-screen w-screen flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 h-screen flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-2/3 px-3 space-y-3 lg:space-y-8">
          <div className="space-y-10">
            <h1 className="text-3xl leading-10 font-medium">
              End-to-end Custom Software Development Services
            </h1>
            <p>
              Create lasting products that can help you grow into a
              billion-dollar empire and beyond.
            </p>
            <Button className="font-normal bg-blue-700">
              Discuss your project idea
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-screen h-screen lg:pt-20 hidden lg:block">
        <Image src={ServicesHeroImage} alt="Services Hero Section Image" />
      </div>
    </section>
  );
};

export default ServicesHero;
