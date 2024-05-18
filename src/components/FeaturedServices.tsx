"use client";
import React, { useState } from "react";
import Image from "next/image";
import OurServicesImage from "@/../public/images/our-services.png";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
  {
    name: "Book Keeping",
    image: OurServicesImage,
    description: "Manage your books efficiently.",
    connectLink: "/connect/book-keeping",
    learnMoreLink: "/learn-more/book-keeping",
  },
  {
    name: "Accounting",
    image: OurServicesImage,
    description: "Professional accounting services.",
    connectLink: "/connect/accounting",
    learnMoreLink: "/learn-more/accounting",
  },
  {
    name: "Payroll",
    image: OurServicesImage,
    description: "Streamline your payroll processes.",
    connectLink: "/connect/payroll",
    learnMoreLink: "/learn-more/payroll",
  },
  {
    name: "Sales Tax",
    image: OurServicesImage,
    description: "Efficient sales tax management.",
    connectLink: "/connect/sales-tax",
    learnMoreLink: "/learn-more/sales-tax",
  },
  {
    name: "Budgeting",
    image: OurServicesImage,
    description: "Plan and manage your budget.",
    connectLink: "/connect/budgeting",
    learnMoreLink: "/learn-more/budgeting",
  },
  {
    name: "Tax",
    image: OurServicesImage,
    description: "Comprehensive tax services.",
    connectLink: "/connect/tax",
    learnMoreLink: "/learn-more/tax",
  },
];

const FeaturedServices = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  return (
    <section className="flex flex-col items-center lg:min-h-[100vh] py-10 justify-center">
      <div className="lg:w-10/12 w-11/12 px-2">
        <h1 className="font-medium text-blue-600 text-5xl mb-20 text-center">
          Featured Services
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-20 items-center">
          <div className="w-11/12 lg:w-1/2 lg:space-y-10 space-y-5 flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                className="lg:text-4xl text-2xl font-semibold inline-block hover:cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <h1
                  className={`text-gray-400 hover:text-black inline-block ${
                    selectedService.name == service.name && "text-black"
                  }`}
                >
                  {service.name}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-11/12 lg:w-1/2 py-10 lg:py-0 space-y-8">
            <Image
              width={400}
              height={400}
              src={
                selectedService.image ? selectedService.image : OurServicesImage
              }
              alt={selectedService.name}
              className="rounded-lg w-full object-cover aspect-video"
            />
            <p className="">{selectedService.description}</p>
            <div className="space-y-2 lg:space-x-3">
              <Link href={selectedService.connectLink}>
                <Button className="font-normal bg-blue-700">
                  Connect with us
                </Button>
              </Link>
              <Link href={selectedService.learnMoreLink}>
                <Button className="font-normal border-blue-700 border bg-transparent text-blue-700">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
