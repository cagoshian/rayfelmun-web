import Link from "next/link";
import Image from "next/image";

const Committees = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mt-20 text-center">
        <div className="md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href="/unesco">UNESCO</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Cultural Heritage and World Heritage Sites
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/unesco.jpg"
                    alt="unesco"
                    className="w-full block"
                    width={250}
                    height={140}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Within the esteemed United Nations Educational, Scientific and
                  Cultural Organization committee, delegates will be discussing
                  the importance of World Heritage Sites, the unique aspects of
                  their cultural heritages, and the international organizations
                  established to cover these valuable treasures.
                </p>
              </div>
            </div>
            <br />
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href="/legal">LEGAL</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Discussion of Legal Issues
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/cabinet.jpg"
                    alt="legal"
                    className="w-full block"
                    width={250}
                    height={140}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href="/interpol">INTERPOL</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The International Criminal Police Organization
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/chernobyl.jpg"
                    alt="interpol"
                    className="w-full block"
                    width={250}
                    height={140}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;
