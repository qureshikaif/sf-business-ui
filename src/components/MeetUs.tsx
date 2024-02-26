import { ShoppingCart } from "lucide-react";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "./ui/card";
import Image from "next/image";

const MeetUs = () => {
  return (
    <section className="bg-blue-700 h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className=" w-10/12 h-3/4">
        <div className="flex flex-col space-y-3 my-14">
          <h1 className="font-medium text-white text-3xl">Meet Our Team</h1>
          <p className="text-lg text-white">
            We’re a team of 300+ problem-solvers, strategists, and dreamers,
            united by our pioneering spirit. Connect with our leaders to discuss
            your business challenges.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 bg-black"></div>
      </div>
    </section>
  );
};

export default MeetUs;
