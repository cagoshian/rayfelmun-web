import Image from "next/image";
import Link from "next/link";
import footerData from "@/data/footerData";

const Footer = () => {
    return (
        <footer className="relative z-10 bg-gradient-to-b from-transparent to-primary pt-6 md:pt-10 lg:pt-14">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12 mb-2 lg:mb-16">
                        <div className="max-w-[360px]">
                            <div className="mb-8 flex flex-row items-center gap-4">
                                <Link href="/" className="inline-block">
                                    <Image src="/images/logo.png" alt="Rayfelmun Logo" width={112} height={24}
                                           className="w-24 block"/>
                                </Link>

                                <div className="h-22 w-1/360 bg-white/70"></div>

                                <Link href="/" className="inline-block">
                                    <Image src="/images/UN_logo.png" alt="UN Logo" width={112} height={24}
                                           className="w-24 block"/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {footerData.map((section, index) => (
                        <div key={index}
                             className={`w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/24 ${index === 0 ? 'xl:w-4/24' : 'xl:w-4/24'}`}>
                            <div className="mb-4 lg:mb-4">
                                <h2 className="mb-3 text-xl font-bold text-white">{section.title}</h2>

                                <ul>
                                    {section.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link href={link.href}
                                                  className={link.noStyle ? "" : "mb-1 inline-block text-base font-medium text-[#ddd] hover:text-white transition-colors ease-in duration-200"}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-3">
                <div className="container flex justify-center">
                    <p className="text-center text-base text-white">
                        &copy; {new Date().getFullYear()} • Open Source on <a
                            href="https://github.com/cagoshian/rayfelmun-web"
                            target="_blank"
                            rel="nofollow noopener"
                            className="text-gray-300 hover:text-white transition-colors ease-in duration-200 underline"
                        >
                            GitHub
                        </a> • Apache License 2.0
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
