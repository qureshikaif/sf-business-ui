import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    company: "Company A",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
    logo: "https://via.placeholder.com/50",
    url: "https://example.com",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Link
              key={review.id}
              href={review.url}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.logo}
                  alt={review.company}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h5 className="font-bold">{review.company}</h5>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
