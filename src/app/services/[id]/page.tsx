"use client";
import { services } from "@/placeholders/Services";
import ServicesHero from "@/components/ServicesHero";
import { useParams } from "next/navigation";
import { serviceType } from "@/types/service";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceImage from "@/../public/images/one.jpg";
import Link from "next/link";

const ServicesMain = () => {
  const params = useParams();
  const id = params.id;
  const selectedService = services.find((service) => service.link === id);
  return (
    <div className="overflow-hidden">
      <ServicesHero service={selectedService as serviceType} />
      <section className="flex flex-col justify-center py-20">
        <h1 className="text-blue-600 text-2xl font-semibold px-24">
          {selectedService?.name}
        </h1>
        <div className="pt-8 px-24 grid gap-5 grid-cols-4 w-full">
          {selectedService?.moreservices.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl rounded-md">
              <CardHeader className="p-0">
                <Image
                  src={ServiceImage}
                  alt="Service Image"
                  className="h-52 object-cover rounded-t-md"
                />
              </CardHeader>
              <CardContent className="px-4 py-3">
                <CardTitle className="my-2 text-md">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between px-4  pb-4">
                <Link
                  href={`${selectedService.link}/${service.link}`}
                  className="w-full"
                >
                  <Button
                    className="bg-transparent border border-blue-500 w-full text-xs text-blue-500 hover:bg-blue-500 hover:text-white"
                    size={"sm"}
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesMain;
