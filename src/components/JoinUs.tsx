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
import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section className="overflow-hidden flex flex-col items-center justify-center py-10 lg:min-h-[110vh]">
      <div className="lg:w-10/12 w-11/12 px-2 py-5 h-3/4">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-blue-600">Join us</h1>
          <p className="text-3xl font-semibold">
            Reimagine your career with us
          </p>
          <p className="text-base">
            Behind every great change is a great human. You could be the one!
            Together, we’ll create a culture of equality, inclusivity and
            growth, while solving some of the world’s biggest challenges .
          </p>
          <Button className="bg-blue-600 w-[200px] text-white">
            See all open positions
          </Button>
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
                <div className="">
                  <Card className="border-none">
                    <CardContent className="p-0 flex flex-col space-y-3">
                      <Image
                        src={Five}
                        alt="Card Images"
                        className="object-cover aspect-square w-full rounded-md"
                      />
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

export default JoinUs;
