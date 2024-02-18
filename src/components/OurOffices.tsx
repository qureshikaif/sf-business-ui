import React from "react";

const OurOffices = () => {
  return (
    <section className="bg-white flex flex-col w-screen h-screen justify-center items-center">
      <div className="w-3/4 space-y-9 bg-slate-200 h-5/6">
        <div className="py-4 space-y-5">
          <h4 className="text-blue-600">Our Offices</h4>
          <p className="text-2xl font-medium">
            Need to find our office near you?
          </p>
        </div>
        <div className="h-3/5 bg-black">
          <h1>Slider</h1>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
