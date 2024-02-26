import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ShoppingCart } from "lucide-react";
import { WhyUsCard } from "@/placeholders/WhyUsCard";

const WhyUs = () => {
  return (
    <section className="bg-white h-[130vh] overflow-hidden flex flex-col items-center justify-center">
      <div className="w-10/12 px-5 py-12">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-blue-600">Why Us</h1>
          <p className="text-3xl font-semibold">
            We offer best-in-class Service Delivery
          </p>
        </div>
        <div className="h-16"></div>
        <div className="grid grid-cols-3 gap-7">
          {WhyUsCard.map((card, index) => (
            <Card
              key={index}
              className="transform border-none hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer shadow-xl"
            >
              <CardHeader>
                <ShoppingCart className="p-3 w-12 h-12 rounded-full bg-blue-300" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-normal">
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;