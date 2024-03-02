import React from "react";
import { Card, CardContent } from "./ui/card";
import Five from "../../public/images/one.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";

const OurCommitments = () => {
  return (
    <section className="h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="w-10/12 p-5 h-3/4">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-blue-600">Our Commitments</h1>
          <p className="text-3xl font-semibold">
            Initiatives that help communities thrive
          </p>
        </div>
        <div className="h-20"></div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="pr-10">
                  <Card className="border-none">
                    <CardContent className="p-0 flex flex-col space-y-3">
                      <Image
                        src={Five}
                        alt="Card Images"
                        className="object-cover aspect-video w-full rounded-md"
                      />
                      <h1 className="text-xl">Ven D Relief</h1>
                      <p className="text-sm">
                        Contributing time and money to take initiatives for
                        social impact so we can make the world a better place
                        for everyone and give back to the community.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default OurCommitments;
