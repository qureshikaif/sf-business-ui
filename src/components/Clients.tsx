import Image from "next/image";
import Link from "next/link";

const clientLogos = [
  {
    src: "https://via.placeholder.com/120x60",
    alt: "Client A",
    url: "https://example.com/client-a",
  },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-500">Our Clients</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clientLogos.map((logo, index) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              href={logo.url}
              passHref
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                objectFit="contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
