import React from "react";
import { ShoppingCart } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { ExpertiseCard } from "@/placeholders/ExpertiseCard";

const OurExpertise = () => {
  return (
    <section className="bg-blue-700 h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="w-10/12 p-5">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-blue-200">Our Area Of Expertise</h1>
          <p className="text-3xl text-white font-semibold">
            Shaping diverse markets with game-changing tech & AI
          </p>
          <p className="text-white font-medium">
            The post-digital age shows no signs of slowing down. There’s a
            pressing need for a move to the digital, no matter which industry
            you belong to. At VentureDive, we work across a wide range of
            industries:
          </p>
        </div>
        <div className="h-20"></div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-8">
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
