import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import LogoPNG from "../../public/logo-white.png";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-blue-800 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-10">
        <div className="w-full py-10">
          <div className="py-5">
            <Link href={"/"} className="flex items-center">
              <Image
                className="object-contain size-14"
                src={LogoPNG}
                alt="SF Business Solutions"
              />
              <h1 className="text-lg font-bold text-white">
                SF Business Solutions
              </h1>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-white">
            <div className="w-full md:w-1/2 space-y-10">
              <p>
                Stay ahead in the rapidly changing world. Take bold steps
                forward in digital transformation, emerging technologies,
                scalable systems and custom-built software that helps our
                clients extract 360° value from business.
              </p>
              <Button className="border" variant={"ghost"}>
                Book a consultant
              </Button>
            </div>
            <div className="w-full md:w-1/4 flex flex-col mt-10 md:mt-0 lg:items-center">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold text-xl">Contact</h1>
                <Link href="/" className="hover:underline underline-offset-4">
                  Karachi, Pakistan
                </Link>
                <Link
                  href="tel:03331234567"
                  className="hover:underline underline-offset-4"
                >
                  0333 1234567
                </Link>
                {/* <Link href="/" className="hover:underline underline-offset-4">
                  samad@sfbussiness.com
                </Link> */}
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col mt-10 md:mt-0 lg:items-center">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold text-xl">Services</h1>
                <Link href="/" className="hover:underline underline-offset-4">
                  Custom Software Development
                </Link>
                <Link href="/" className="hover:underline underline-offset-4">
                  Design Studio
                </Link>
                <Link href="/" className="hover:underline underline-offset-4">
                  Digital Transformation
                </Link>
                <Link href="/" className="hover:underline underline-offset-4">
                  Cloud Services
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex flex-col mt-10 md:mt-0 lg:items-center">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold text-xl">Company</h1>
                <Link href="/" className="hover:underline underline-offset-4">
                  About us
                </Link>
                <Link href="/" className="hover:underline underline-offset-4">
                  Careers
                </Link>
                <Link href="/" className="hover:underline underline-offset-4">
                  Blogs
                </Link>
                {/* <Link href="/" className="hover:underline underline-offset-4">
                  Contact us
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Separator className="bg-white h-[1px]" />
      <div className="flex justify-center items-center py-12 bg-blue-800 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-white">
          <h1>© SF Business Solutions. All rights reserved.</h1>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <SocialIcon
              url="https://facebook.com"
              bgColor="transparent"
              className="border-white border rounded-full hover:bg-blue-600"
            />
            <SocialIcon
              url="https://instagram.com"
              bgColor="transparent"
              className="border-white border rounded-full hover:bg-gradient-to-t from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
            />
            <SocialIcon
              url="https://upwork.com"
              bgColor="transparent"
              className="border-white border rounded-full hover:bg-[#6fda44]"
            />
            <SocialIcon
              url="https://linkedin.com"
              bgColor="transparent"
              className="border-white border rounded-full hover:bg-blue-900"
            />
            <SocialIcon
              url="https://twitter.com"
              bgColor="transparent"
              className="border-white border rounded-full hover:bg-blue-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
