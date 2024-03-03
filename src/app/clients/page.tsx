import ClientsCarousel from "@/components/ui/ClientCarousel";
import ClientsSection from "@/components/ui/Clients";
import OurWorkSection from "@/components/ui/OurWork";
import ReviewsSection from "@/components/ui/Reviews";

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
