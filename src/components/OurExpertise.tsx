import React from "react";
import { ShoppingCart } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { ExpertiseCard } from "@/placeholders/ExpertiseCard";
import { Parallax } from "react-scroll-parallax";

const OurExpertise = () => {
  return (
    <section className="bg-blue-700 min-h-screen overflow-hidden flex flex-col items-center justify-center relative">
      <Parallax
        className="absolute -top-24 -right-24"
        speed={-20}
        translate="yes"
        translateX={[-50, 50]}
        scale={[1, 1, "easeInQuad"]}
      >
        <div className="h-[25rem] w-[25rem] rounded-full shadow-inner shadow-blue-300  bg-blue-600 overflow-hidden"></div>
      </Parallax>

      <div className="lg:w-10/12 w-11/12 px-2 py-10 z-10">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-blue-200">Our Area Of Expertise</h1>
          <p className="text-3xl text-white font-semibold">
            Shaping diverse markets with game-changing tech & AI
          </p>
          <p className="text-white font-medium z-10">
            The post-digital age shows no signs of slowing down. There’s a
            pressing need for a move to the digital, no matter which industry
            you belong to. At VentureDive, we work across a wide range of
            industries:
          </p>
        </div>
        <div className="h-14 lg:h-20"></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 lg:gap-y-8 md:gap-y-6 gap-y-5">
          {ExpertiseCard.map((card, index) => (
            <Card
              key={index}
              className="transform bg-blue-600 border-none hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
            >
              <CardHeader>
                <ShoppingCart
                  className="p-3 w-12 h-12 bg-blue-500 rounded-full"
                  color="white"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-white text-xl font-normal">
                  {card.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
