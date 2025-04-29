import Image from "next/image";

const UNHCR = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl text-center font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                  LEGAL
                </h2>
                <div>
                  <p className="mb-10 text-base text-center font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Gender Equality and Women's Rights
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/interpol.jpeg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    As the LEGAL Committee, we advocate for gender equality and the protection of women’s rights worldwide. Our mission is to address issues such as gender-based violence, discrimination, and barriers to education, health, and leadership. Through collaboration and diplomacy, we work to create inclusive, lasting solutions that empower women and ensure equal opportunities for all.
                  </p>
                </div>
              </div>
              <div
                id="apply"
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <a
                  href="/pdf/RayfelMun LEGAL Study Guide__.pdf"
                  download="RayfelMun LEGAL Study Guide__.pdf"
                  className="rounded-2xl shadow-md bg-dark  py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Study Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UNHCR;
