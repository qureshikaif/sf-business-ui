import Image from "next/image";
import Four from "../../public/images/four.jpg";
import { Button } from "./ui/button";
import { Parallax } from "react-scroll-parallax";

const MeetUs = () => {
  return (
    <section className="bg-blue-700 h-screen overflow-hidden flex flex-col items-center justify-center relative">
      <Parallax
        className="absolute -top-24 -right-24"
        speed={-20}
        translate="yes"
        translateX={[-50, 50]}
        scale={[1, 1, "easeInQuad"]}
      >
        <div className="h-[25rem] w-[25rem] rounded-full shadow-inner shadow-blue-300  bg-blue-600 overflow-hidden"></div>
      </Parallax>

      <div className="w-10/12 z-10">
        <div className="flex flex-col space-y-3 my-14">
          <h1 className="font-medium text-white text-3xl">Meet Our Team</h1>
          <p className="text-lg text-white z-10">
            We’re a team of 300+ problem-solvers, strategists, and dreamers,
            united by our pioneering spirit. Connect with our leaders to discuss
            your business challenges.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={Four}
              alt="Test"
              className="aspect-square rounded-lg object-cover"
            />
            <h1 className="text-white text-lg font-semibold">
              Abdus Samad Roomie
            </h1>
            <p className="text-white">CEO of SF Business Solutions</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={Four}
              alt="Test"
              className="aspect-square rounded-lg object-cover"
            />
            <h1 className="text-white text-lg font-semibold">Faiq Hussain</h1>
            <p className="text-white">CTO of SF Business Solutions</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-10">
          <Button className="bg-blue-500">Book a consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default MeetUs;
