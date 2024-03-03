import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const AtGlance = () => {
  return (
    <section className="h-[120vh] pt-20 lg:pt-0 overflow-hidden flex flex-col items-center justify-center">
      <div className="w-11/12 lg:w-10/12 px-2">
        <div className="flex flex-col space-y-3">
          <h1 className="font-medium text-3xl text-blue-800">
            SF Business at glance.
          </h1>
          <p className="text-lg font-light">
            We are a top-rated technology solutions company, laser-focused on
            delivering the promise on technology and human ingenuity. Our
            people, purpose and governance help us deliver excellence & build
            lasting business partnerships.
          </p>
        </div>
        <div className="h-20"></div>
        <div className="flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
            <CarouselPrevious className="hidden lg:block" />
            <CarouselNext className="hidden lg:block" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AtGlance;
