import FeaturedServices from "@/components/FeaturedServices";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <FeaturedServices />
    </main>
  );
}
