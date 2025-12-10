"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import menuData from "@/data/menuData";
import { ChevronDownIcon } from "@/components/Common/Icons";
import { useScroll } from "@/components/Common/useScroll";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const sticky = useScroll(80);
  const pathname = usePathname();

  const handleSubmenu = (index) => setOpenIndex(openIndex === index ? -1 : index);

  const linkClass = (path) =>
    `flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-colors ${
      pathname === path ? "text-white" : "text-white/70 hover:text-white"
    }`;

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center transition-all duration-300 ${
        sticky
          ? "fixed z-10 bg-primary/50 shadow-sticky backdrop-blur-lg py-2 lg:py-0"
          : "absolute bg-transparent py-4 lg:py-0"
      }`}
    >
      <div className="w-full relative -mx-4 flex items-center justify-between">
	      
        <div className="w-auto px-10 xl:mr-12">
          <Link href="/" className={`block w-full ${sticky ? "py-2" : "py-2 lg:py-5"}`}>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Rayfelmun Logo"
                width={100}
                height={100}
                className="w-10 lg:w-24 block"
              />
              <h1 className="text-white font-bold text-sm lg:text-xl whitespace-nowrap">
                Rayfelmun'25
              </h1>
            </div>
          </Link>
        </div>

        <div className="flex w-full items-center justify-end px-4">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="absolute right-4 top-1/2 block -translate-y-1/2 cursor-pointer bg-blue-800/20 rounded-lg px-3 py-[6px] min-[1160px]:hidden"
            aria-label="Mobile Menu Toggle"
          >
            <span className={`relative my-1.5 block h-0.5 w-[25px] bg-white transition-all ${navbarOpen ? "top-[7px] rotate-45" : ""}`} />
            <span className={`relative my-1.5 block h-0.5 w-[25px] bg-white transition-all ${navbarOpen ? "opacity-0" : ""}`} />
            <span className={`relative my-1.5 block h-0.5 w-[25px] bg-white transition-all ${navbarOpen ? "-top-[8px] -rotate-45" : ""}`} />
          </button>
	        
          <nav
            className={`absolute right-0 z-30 w-[250px] rounded-2xl border-[.5px] border-body-color/20 bg-blue-900 py-4 px-6 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
              navbarOpen ? "visible top-full opacity-100" : "hidden min-[1160px]:flex invisible top-[120%] opacity-0"
            }`}
          >
            <ul className="block lg:flex lg:space-x-12">
              {menuData.map((item, index) => (
                <li key={item.id} className="group relative">
                  {item.path ? (
                    <Link href={item.path} className={linkClass(item.path)}>
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <p
                        onClick={() => handleSubmenu(index)}
                        className="flex cursor-pointer items-center justify-between py-2 text-base text-white/70 group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                      >
                        {item.title}
                        <span className={`pl-3 transition-rotate ease-in duration-200 ${openIndex === index ? "rotate-x-180" : "rotate-x-0"}`}>
                          <ChevronDownIcon />
                        </span>
                      </p>
                      <div
                        className={`submenu relative transition-all left-0 top-full rounded-2xl bg-dark duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                          openIndex === index ? "block" : "hidden"
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id || subItem.path}
                            href={subItem.path}
                            className="block ml-4 rounded py-2.5 text-sm text-white/70 hover:text-white lg:px-3"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
