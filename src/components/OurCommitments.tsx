import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const OurCommitments = () => {
  return (
    <section className="h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="w-10/12 p-5 h-3/4">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Our Commitments</h1>
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="border-2 border-gray-400">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
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
