"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import useScroll from "@/hooks/useScroll";

const Header = () => {
  const showNav = useScroll();

  return (
    <header
      className={`shadow-md w-full h-20 flex justify-center p-5 items-center overflow-hidden fixed z-50 bg-white transition-transform duration-200 ease-in-out ${
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
        <nav className="flex basis-1/2 justify-between">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/services">Services</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
