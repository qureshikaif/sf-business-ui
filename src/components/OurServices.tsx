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

const accordion = [
  {
    title: "Scalable System Development",
    content:
      "Create end-to-end mobile and web applications that can be scaled as demand shifts. Leverage higher agility, better user experience, and an overall lower cost of maintenance for your enterprise-grade systems",
    value: "item-1",
  },
  {
    title: "Infrastructure Modernization",
    content:
      "Integrate seamless hybrid cloud migration to upgrade and modernize your current system to a newer, faster, and better infrastructure. Augment security and an optimized IT footprint to enhance your product and maximize revenue.",
    value: "item-2",
  },
  {
    title: "Product Design",
    content:
      "Craft user-centric, visually appealing experiences for your digital product. Solve real-world problems and strengthen business metrics using epic design methodologies straight out of the VenD design studio.",
    value: "item-3",
  },
  {
    title: "Quality Assurance & Support",
    content:
      "Eliminate functional, performance, and security flaws within your system with our rounded-up quality assurance services, post-launch support, and maintenance. Deploy a seamless and well-functioning product for your users to benefit from.",
    value: "item-4",
  },
  {
    title: "Enterprise Data Solutions",
    content:
      "Eliminate functional, performance, and security flaws within your system with our rounded-up quality assurance services, post-launch support, and maintenance. Deploy a seamless and well-functioning product for your users to benefit from.",
    value: "item-5",
  },
  {
    title: "Cloud Services",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
    value: "item-6",
  },
];

const OurServices = () => {
  return (
    <section className="overflow-hidden flex flex-col items-center py-40 lg:min-h-[110vh]">
      <div className="lg:w-10/12 w-11/12 px-2 py-5 h-1/2">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-blue-600">Our Services</h1>
          <h1 className="text-3xl font-medium">
            Offering a range of services geared towards business growth
          </h1>
        </div>
        <div className="h-20"></div>
        <div className="flex space-x-44 items-center">
          <Image src={OurServicesImage} alt="" className="rounded-lg" />
          <Accordion
            type="single"
            collapsible
            className="w-full px-5 space-y-3"
          >
            {accordion.map((item, index) => (
              <AccordionItem key={index} value={item.value}>
                <AccordionTrigger className="text-xl hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {item.content}
                </AccordionContent>
                <Separator className="bg-gray-200" />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
