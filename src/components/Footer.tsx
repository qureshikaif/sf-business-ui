import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-screen h-[60vh] bg-blue-600 flex flex-col items-center">
      <div className="w-5/6 py-10">
        <div className="py-5">
          <h1 className="text-2xl font-bold text-white">
            SF Business Solutions
          </h1>
        </div>
        <div className="flex justify-between text-white">
          <div className="w-1/2 space-y-10">
            <p>
              Stay ahead in the rapidly changing world. Take bold steps forward
              in digital transformation, emerging technologies, scalable systems
              and custom-built software that helps our clients extract 360°
              value from business.
            </p>
            <Button className="border" variant={"ghost"}>
              Let&apos;s get to work
            </Button>
          </div>
          <div className="w-1/4 flex flex-col items-center">
            <div className="flex flex-col space-y-3">
              <h1>Trusted By</h1>
              <Link href="/" className="hover:underline underline-offset-4">
                Startups
              </Link>
              <Link href="/" className="hover:underline underline-offset-4">
                Enterprises
              </Link>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <div className="flex flex-col space-y-3">
              <h1>Services</h1>
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
          <div className="w-1/4 flex flex-col items-center">
            <div className="flex flex-col space-y-3">
              <h1>Company</h1>
              <Link href="/" className="hover:underline underline-offset-4">
                About us
              </Link>
              <Link href="/" className="hover:underline underline-offset-4">
                Careers
              </Link>
              <Link href="/" className="hover:underline underline-offset-4">
                Blogs
              </Link>
              <Link href="/" className="hover:underline underline-offset-4">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex justify-center items-center w-5/6 h-full">
        <div className="flex justify-between items-center w-full text-white">
          <h1>&copy; SF Business Solutions. All rights reserved.</h1>
          <div className="flex space-x-4">
            <h1>Links</h1>
            <h1>Links</h1>
            <h1>Links</h1>
            <h1>Links</h1>
            <h1>Links</h1>
            <h1>Links</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;