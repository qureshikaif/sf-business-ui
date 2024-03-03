import Image from "next/image";
import Four from "../../public/images/four.jpg";
import { Button } from "./ui/button";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

const meetus = [
  {
    image: Four,
    name: "Abdus Samad Roomie",
    role: "CEO of SF Business Solutions",
    linkedin: "/",
  },
  {
    image: Four,
    name: "Faiq Hussain",
    role: "CTO of SF Business Solutions",
    linkedin: "/",
  },
];

const MeetUs = () => {
  return (
    <section className="bg-blue-700 lg:h-screen overflow-hidden flex flex-col items-center justify-center relative">
      <Parallax
        className="absolute -top-24 -right-24"
        speed={-20}
        translate="yes"
        translateX={[-50, 0]}
        translateY={[50, 0]}
        scale={[1, 1, "easeInQuad"]}
      >
        <div className="h-[25rem] w-[25rem] rounded-full shadow-inner shadow-blue-300  bg-blue-600 overflow-hidden"></div>
      </Parallax>

      <div className="lg:w-10/12 w-11/12 px-2 z-10">
        <div className="flex flex-col space-y-3 my-14">
          <h1 className="font-medium text-white text-3xl">Meet Our Team</h1>
          <p className="text-lg text-white z-10">
            We’re a team of 300+ problem-solvers, strategists, and dreamers,
            united by our pioneering spirit. Connect with our leaders to discuss
            your business challenges.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {meetus.map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="relative group">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="aspect-square rounded-lg object-cover"
                />
                <Link href={member.linkedin}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-70"></div>
                    <p className="text-white text-lg font-semibold z-10 opacity-0 group-hover:opacity-100 ">
                      LinkedIn
                    </p>
                  </div>
                </Link>
              </div>
              <h1 className="text-white text-lg font-semibold">
                {member.name}
              </h1>
              <p className="text-white">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-10">
          <Button className="bg-blue-500">Book a consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default MeetUs;
