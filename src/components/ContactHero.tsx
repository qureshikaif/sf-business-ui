import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Four from "../../public/images/four.jpg";

const ContactHero = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-between">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className="w-2/3 space-y-8">
          <h1 className="text-blue-700 font-medium">Let&apos;s Connect</h1>
          <div className="space-y-4">
            <p className="text-3xl leading-10 font-medium">
              Get in touch to build scalable digital solutions. In weeks, not
              months.
            </p>

            <div className="h-full flex space-x-5">
              <Button className="font-normal bg-blue-700">
                Book a meeting
              </Button>
              <Button
                variant={"ghost"}
                className="text-blue-700 font-normal border border-blue-700"
              >
                Drop a message
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-700 h-full lg:pt-20"></div>
    </section>
  );
};

export default ContactHero;
