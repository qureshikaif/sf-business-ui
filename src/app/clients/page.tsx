import AtGlance from "@/components/AtGlance";
import ClientsSection from "@/components/Clients";
import OurWorkSection from "@/components/OurWork";
import ReviewsSection from "@/components/Reviews";

const whoWeServe = () => {
  return (
    <>
      <br />
      <br />
      {/* <ClientsCarousel /> */}
      <AtGlance />
      <ClientsSection />
      <OurWorkSection />
      <ReviewsSection />
    </>
  );
};

export default whoWeServe;
