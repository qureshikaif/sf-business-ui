"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../public/logo.png";
import LogoWhite from "../../public/logo-white.png";
import Image from "next/image";
import useScroll from "@/hooks/useScroll";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Who we serve",
    path: "/clients",
  },
];

const Header = () => {
  const { showNav, showMobileNav, setShowMobileNav } = useScroll();
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();
  console.log(pathname);
  const isLandingPage = pathname === "/";

  useEffect(() => {
    const scrollListener = () => {
      setIsTop(window.pageYOffset < 50);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const handleLinkClick = () => setShowMobileNav(false);

  return (
    <>
      <header
        className={`fixed w-full h-20 flex justify-center p-5 items-center overflow-hidden z-50 transition-all duration-200 ease-in-out ${
          showNav ? "" : "-translate-y-full"
        } ${
          isTop && isLandingPage
            ? "bg-transparent shadow-none"
            : "bg-white shadow-md"
        }`}
      >
        <div className="w-5/6 flex items-center justify-between">
          <Link href={"/"} className="flex items-center">
            <Image
              className="object-contain size-14"
              src={isTop && isLandingPage ? LogoWhite : Logo}
              alt="SF Business Solutions"
            />
            <h1
              className={`text-lg font-bold ${
                isTop && isLandingPage ? "text-white" : "text-blue-600"
              }`}
            >
              SF Business Solutions
            </h1>
          </Link>
          <nav className="lg:flex basis-1/2 justify-between hidden">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`${
                  isTop && isLandingPage
                    ? "text-white hover:text-blue-100"
                    : "hover:text-blue-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
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
        {links.map((link, index) => (
          <Link
            key={index}
            onClick={handleLinkClick}
            href={link.path}
            className="hover:text-blue-800"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
