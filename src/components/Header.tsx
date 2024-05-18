"use client";
import useScroll from "@/hooks/useScroll";
import { services } from "@/placeholders/Services";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import LogoWhite from "../../public/logo-white.png";
import Logo from "../../public/logo.png";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "#",
    dropdown: services.map((service) => ({
      name: service.name,
      path: `/services/${service.id}`,
    })),
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Who we serve",
    path: "/clients",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  const { showNav, showMobileNav, setShowMobileNav } = useScroll();
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  useLayoutEffect(() => {
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
        className={`fixed w-full h-20 flex lg:justify-center justify-between px-3 lg:p-5 items-center z-50 transition-all duration-200 ease-in-out ${
          showNav ? "" : "-translate-y-full"
        } ${
          isTop && isLandingPage
            ? "bg-transparent shadow-none"
            : "bg-white shadow-md"
        }`}
      >
        <div className="lg:w-5/6 flex items-center justify-between">
          <Link href={"/"} className="flex items-center">
            <Image
              className="object-contain size-14"
              src={isTop && isLandingPage ? LogoWhite : Logo}
              alt="SF Business Solutions"
            />
            <h1
              className={`px-3 lg:px-0 text-lg font-bold ${
                isTop && isLandingPage ? "text-white" : "text-blue-600"
              }`}
            >
              SF Business Solutions
            </h1>
          </Link>
          <nav className="lg:flex basis-1/2 justify-between hidden">
            {links.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  href={link.path}
                  className={`flex items-center ${
                    isTop && isLandingPage
                      ? "text-white hover:text-blue-100"
                      : "hover:text-blue-800"
                  }`}
                >
                  {link.name}
                  {link.name === "Services" && <ChevronDown size={16} />}
                </Link>
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-150 opacity-0 group-hover:opacity-100 z-50">
                    {link.dropdown.map((dropdownLink, index) => (
                      <Link
                        key={index}
                        href={dropdownLink.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {dropdownLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <Menu
          size={24}
          className={`lg:hidden ${
            isTop && isLandingPage ? "text-white" : "text-black"
          }`}
          onClick={() => setShowMobileNav(!showMobileNav)}
        />
      </header>
      <nav
        className={`${
          isTop && isLandingPage ? "bg-blue-600" : "bg-white"
        } shadow-xl z-10 fixed justify-center transition-transform duration-200 items-center w-screen pt-24 lg:pt-0 pb-6 ${
          showMobileNav ? "flex flex-col" : "-translate-y-full"
        } ease-in-out`}
      >
        {links.map((link, index) => (
          <div key={index} className="relative group">
            <Link
              href={link.path}
              className={`flex items-center ${
                isTop && isLandingPage
                  ? "text-white hover:text-blue-100"
                  : "hover:text-blue-800"
              }`}
            >
              {link.name}
              {link.name === "Services" && <ChevronDown size={16} />}
            </Link>
            {link.dropdown && (
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 ${
                  isTop && isLandingPage
                    ? "bg-[rgba(37,99,235,0.8)]"
                    : "bg-white"
                }  ring-2 ring-black ring-opacity-5 transition ease-in-out duration-150 opacity-0 group-hover:opacity-100 z-50`}
              >
                {link.dropdown.map((dropdownLink, index) => (
                  <Link
                    key={index}
                    href={dropdownLink.path}
                    className={`block px-4 py-2 text-sm ${
                      isTop && isLandingPage
                        ? "text-white hover:bg-blue-400"
                        : "text-black hover:bg-gray-100"
                    } `}
                  >
                    {dropdownLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Header;
