"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-6 md:pt-10 lg:pt-14" data-wow-delay=".1s">
    <div className="container">
    <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
    <div className="mb-12 max-w-[360px] lg:mb-16">
    <Link href="/" className="mb-8 inline-block">
    <Image
    src="/logo.png"
    alt="logo"
    className="w-full block"
    width={140}
    height={30}
    />
    </Link>
      <Link href="/" className="mb-8 inline-block">
    <Image
    src="/UN_logo.png"
    alt="logo"
    className="w-full block"
    width={140}
    height={30}
    />
    </Link>
    <p className="mb-9 text-base font-medium leading-relaxed text-body-color"></p>
    <div className="flex items-center">
    <a
    href="https://www.instagram.com/rayfelmun/"
    rel="nofollow noopener"
    aria-label="social-link"
    className="mr-6 text-[#CED3F6] hover:text-primary"
    >
    <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    id="instagram"
    xmlns="http://www.w3.org/2000/svg"
    >
    <defs>
    <linearGradient id="a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#FFC107" />
    <stop offset=".507" stopColor="#F44336" />
    <stop offset=".99" stopColor="#9C27B0" />
    </linearGradient>
    <linearGradient id="b" x1="5.172" x2="10.828" y1="10.828" y2="5.172" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#FFC107" />
    <stop offset=".507" stopColor="#F44336" />
    <stop offset=".99" stopColor="#9C27B0" />
    </linearGradient>
    <linearGradient id="c" x1="11.923" x2="12.677" y1="4.077" y2="3.323" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#FFC107" />
    <stop offset=".507" stopColor="#F44336" />
    <stop offset=".99" stopColor="#9C27B0" />
    </linearGradient>
    </defs>
    <path fill="url(#a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z" />
    <path fill="url(#b)" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z" />
    <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)" />
    </svg>
    </a>
    </div>
    </div>
    </div>

    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
    <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-xl font-bold text-white">Useful Links</h2>
    <ul>
    <li>
    <a href="/" className="mb-4 inline-block text-base font-medium text-body-color hover:text-white">Home</a>
    </li>
    <li>
    <a href="/about" className="mb-4 inline-block text-base font-medium text-body-color hover:text-white">About</a>
    </li>
    <li>
    <a href="/schedule" className="mb-4 inline-block text-base font-medium text-body-color hover:text-white">Schedule</a>
    </li>
    </ul>
    </div>
    </div>

    <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
    <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-xl font-bold text-white">Support & Help</h2>
    <ul>
    <li>
    <a href="/faq" className="mb-4 inline-block text-base font-medium text-body-color hover:text-white">FAQ</a>
    </li>
    <li>
    <a href="/contact" className="mb-4 inline-block text-base font-medium text-body-color hover:text-white">Contact</a>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </div>

    <div className="bg-primary/10 py-3">
    <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
    <p className="text-center text-base text-white">
    We are{" "}
    <a
    href="https://github.com/cagoshian/rayfelmun-web"
    rel="nofollow noopener"
    className="text-body-color hover:text-white"
    >
    open source!
    </a>
    </p>
    </div>
    </div>
    </footer>
  );
};

export default Footer;
