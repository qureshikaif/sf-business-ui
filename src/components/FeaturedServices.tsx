import Image from "next/image";
import React from "react";
import OurServicesImage from "@/../public/images/our-services.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
  {
    name: "Book Keeping",
  },
  {
    name: "Accounting",
  },
  {
    name: "Payroll",
  },
  {
    name: "Sales Tax",
  },
  {
    name: "Budgeting",
  },
  {
    name: "Tax",
  },
];

const FeaturedServices = () => {
  return (
    <section className="overflow-hidden flex flex-col items-center lg:min-h-[100vh] justify-center">
      <div className="lg:w-10/12 w-11/12 px-2">
        <div className="flex space-x-20 items-center">
          <div className="w-1/2 space-y-10 flex flex-col">
            <h1 className="font-bold text-blue-600">Featured Services</h1>
            {services.map((service, index) => (
              <Link
                href={"#"}
                key={index}
                className="text-4xl font-semibold inline-block hover:cursor-default"
              >
                <h1 className="text-gray-400 hover:text-black inline-block hover:cursor-pointer">
                  {service.name}
                </h1>
              </Link>
            ))}
          </div>
          <div className="flex flex-col w-1/2 space-y-8">
            <Image
              src={OurServicesImage}
              alt=""
              className="rounded-lg w-full object-cover aspect-video"
            />
            <p className="">
              Plan and evaluate essential product features, audit existing
              technology architecture, and craft a digital transformation
              roadmap.
            </p>
            <div className="space-x-3">
              <Button className="font-normal bg-blue-700">
                Connect with us
              </Button>
              <Button className="font-normal border-blue-700 border bg-transparent text-blue-700">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
