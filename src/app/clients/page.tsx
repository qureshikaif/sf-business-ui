import ClientsCarousel from "@/components/ClientCarousel";
import ClientsSection from "@/components/Clients";
import OurWorkSection from "@/components/OurWork";
import ReviewsSection from "@/components/Reviews";

const whoWeServe = () => {
  return (
    <>
      <br />
      <br />
      <ClientsCarousel />
      <ClientsSection />
      <OurWorkSection />
      <ReviewsSection />
    </>
  );
};

export default whoWeServe;
