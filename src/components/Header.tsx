"use client";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import useScroll from "@/hooks/useScroll";

const Header = () => {
  const showNav = useScroll();

  return (
    <header
      className={`shadow-md fixed w-full h-20 flex justify-center p-5 items-center overflow-hidden z-50 bg-white transition-transform duration-200 ease-in-out ${
        showNav ? "" : "-translate-y-full"
      }`}
    >
      <div className="w-5/6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              className="object-contain w-20 h-20"
              src={Logo}
              alt="SF Business Solutions"
            />
          </Link>
        </div>
        <nav className="flex basis-1/2 justify-between md:flex-row flex-col">
          <Link href="/about" className="hover:text-blue-800">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-800">
            Contact Us
          </Link>
          <Link href="/services" className="hover:text-blue-800">
            Services
          </Link>
          <Link href="/clients" className="hover:text-blue-800">
            Who we serve
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
