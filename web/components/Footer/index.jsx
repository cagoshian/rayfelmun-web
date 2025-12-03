import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/Common/Icons";
import footerData from "@/data/footerData";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-primary bg-opacity-5 pt-6 md:pt-10 lg:pt-14">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
	        
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12 mb-12 lg:mb-16">
            <div className="max-w-[360px]">
	            
              <div className="mb-8 flex flex-row items-center gap-4">
                <Link href="/" className="inline-block">
                  <Image src="/images/logo.png" alt="Rayfelmun Logo" width={112} height={24} className="w-28 block" />
                </Link>
                <div className="h-8 w-[1px] bg-body-color/30"></div>
                <Link href="/" className="inline-block">
                  <Image src="/images/UN_logo.png" alt="UN Logo" width={112} height={24} className="w-28 block" />
                </Link>
              </div>

              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/rayfelmun/"
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label="Instagram"
                  className="mr-6 text-[#CED3F6] hover:text-primary transition-colors"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
	        
          {footerData.map((section, index) => (
            <div key={index} className={`w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 ${index === 0 ? 'xl:w-2/12' : 'xl:w-3/12'}`}>
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">{section.title}</h2>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="mb-4 inline-block text-base font-medium text-body-color hover:text-white transition-colors">
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

      <div className="bg-primary/10 py-3">
        <div className="container flex justify-center">
          <p className="text-center text-base text-white">
            We are{" "}
            <a
              href="https://github.com/cagoshian/rayfelmun-web"
              target="_blank"
              rel="nofollow noopener"
              className="text-body-color hover:text-white transition-colors underline"
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
