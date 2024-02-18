import React from "react";
import Image from "next/image";
import One from "@/../public/images/one.jpg";
import Two from "@/../public/images/two.jpg";
import Three from "@/../public/images/three.jpg";
import Four from "@/../public/images/four.jpg";

const OurOffices = () => {
  return (
    <section className="bg-white flex flex-col w-screen justify-center items-center py-20">
      <div className="w-4/5 space-y-9 pt-4">
        <div className="py-4 space-y-5">
          <h4 className="text-blue-600 font-medium">Our Offices</h4>
          <p className="text-3xl font-medium">
            Need to find our office near you?
          </p>
        </div>
        <div>
          <div className="flex">
            <Image src={One} alt="Slider Image One" className="w-1/4" />
            <Image src={Two} alt="Slider Image Two" className="w-1/4" />
            <Image src={Three} alt="Slider Image Three" className="w-1/4" />
            <Image src={Four} alt="Slider Image Four" className="w-1/4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
