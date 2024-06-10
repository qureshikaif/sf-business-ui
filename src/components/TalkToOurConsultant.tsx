import Link from "next/link";
import { Button } from "./ui/button";

const TalkToOurConsultant = () => {
  return (
    <section className="lg:h-[70vh] overflow-hidden flex flex-col items-center justify-center">
      <div className="bg-gradient-to-tr from-blue-600 to-blue-300 lg:w-3/4 w-11/12 h-1/2 py-5 px-5 mb-10 lg:p-0 lg:mb-0 rounded-lg flex flex-col items-center justify-center space-y-5">
        <h1 className="text-white text-2xl font-semibold">
          Unsure which service would benefit you more?
        </h1>
        <p className="text-white">
          Book a free 1-hour consultation and diagnostic of your financials with
          our expert consultant.
        </p>
        <Link href="/contact">
          <Button className="bg-white text-black hover:bg-blue-600 hover:text-white">
            Talk to our consultant
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default TalkToOurConsultant;
