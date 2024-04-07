import FeaturedServices from "@/components/FeaturedServices";
import HomeHero from "@/components/HomeHero";
import OurExpertise from "@/components/OurExpertise";
import OurOffices from "@/components/OurOffices";
import ReviewsSection from "@/components/Reviews";
import TalkToOurConsultant from "@/components/TalkToOurConsultant";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <FeaturedServices />
      <OurExpertise />
      {/* <ReviewsSection /> */}
      <WhyUs />
      <OurOffices />
      <TalkToOurConsultant />
    </main>
  );
}
