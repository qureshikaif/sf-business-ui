import React from "react";
import { Button } from "./ui/button";

const TalkToOurConsultant = () => {
  return (
    <section className="lg:h-[70vh] overflow-hidden flex flex-col items-center justify-center">
      <div className="bg-gradient-to-tr from-blue-600 to-blue-300 w-3/4 h-1/2 rounded-lg flex flex-col items-center justify-center space-y-5">
        <h1 className="text-white text-2xl font-semibold">
          Unsure which service would benefit you more?
        </h1>
        <p className="text-white">
          Book a 15-minute call with our consultant to engage and learn how we
          can help.
        </p>
        <Button className="bg-white text-black hover:bg-blue-600 hover:text-white">
          Talk to our consultant
        </Button>
      </div>
    </section>
  );
};

export default TalkToOurConsultant;
