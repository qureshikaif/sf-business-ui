import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project A",
    description: "A brief description of Project A.",
    imageUrl: "https://via.placeholder.com/150",
    url: "https://example.com/project-a",
  },
  {
    title: "Project B",
    description: "A brief description of Project B.",
    imageUrl: "https://via.placeholder.com/150",
    url: "https://example.com/project-a",
  },
  {
    title: "Project C",
    description: "A brief description of Project C.",
    imageUrl: "https://via.placeholder.com/150",
    url: "https://example.com/project-a",
  },
];

const OurWorkSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
          Explore Our Work
        </h2>
        <div className="px-2 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={250}
                layout="responsive"
                objectFit="cover"
              />
              <div className="p-4">
                <h5 className="font-semibold">{project.title}</h5>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
