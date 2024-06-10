import { BarChart4 } from "lucide-react";
import { Button } from "./ui/button";

const HomeHero = () => {
  return (
    <section className="lg:h-screen pb-16 lg:pb-0 bg-fixed lg:space-x-40 flex flex-col lg:flex-row items-center justify-center bg-blue-600">
      <div className="h-screen w-11/12 lg:w-1/2 flex flex-col justify-center items-center">
        <div className="space-y-3 lg:space-y-8">
          <div className="space-y-3 lg:space-y-10 lg:mt-10">
            <h1 className="lg:text-6xl text-3xl font-semibold leading-normal text-white">
              Excel in what you are best at - Leave the Financials to Us.
            </h1>
            <p className="text-white">
              Empowering your business growth by managing your books and
              finances with expert care.
            </p>
            <div className="space-x-3">
              <Button className="font-normal border-white border bg-transparent text-white">
                Discover
              </Button>
              <Button className="font-normal bg-white text-blue-600">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="size-64 hidden lg:size-80 bg-blue-500 p-10 rounded-full lg:flex items-center justify-center shadow-2xl shadow-gray-700">
        {/* <ArrowBigDown className="text-white text-7xl size-44" /> */}
        {/*  <Image src={HomeHeroImage} width={44} height={44} alt="" /> */}
        <BarChart4 className="text-white text-7xl size-96" />
      </div>
    </section>
  );
};

export default HomeHero;
