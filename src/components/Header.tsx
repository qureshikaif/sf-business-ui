"use client";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import useScroll from "@/hooks/useScroll";
import { Menu } from "lucide-react";

const Header = () => {
  const { showNav, showMobileNav, setShowMobileNav } = useScroll();

  const handleLinkClick = () => setShowMobileNav(false);

  return (
    <>
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
          <nav className="lg:flex basis-1/2 justify-between hidden">
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
        <Menu
          size={24}
          className="lg:hidden"
          onClick={() => setShowMobileNav(!showMobileNav)}
        />
      </header>
      <nav
        className={`bg-white shadow-xl z-10 fixed justify-center transition-transform duration-200 items-center w-screen pt-24 lg:pt-0 pb-6 ${
          showMobileNav ? "flex flex-col" : "-translate-y-full"
        } ease-in-out`}
      >
        <Link
          onClick={handleLinkClick}
          href="/about"
          className="hover:text-blue-800"
        >
          About Us
        </Link>
        <Link
          onClick={handleLinkClick}
          href="/contact"
          className="hover:text-blue-800"
        >
          Contact Us
        </Link>
        <Link
          onClick={handleLinkClick}
          href="/clients"
          className="hover:text-blue-800"
        >
          Who we serve
        </Link>
        <Link
          onClick={handleLinkClick}
          href="/services"
          className="hover:text-blue-800"
        >
          Services
        </Link>
      </nav>
    </>
  );
};

export default Header;
