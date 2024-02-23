import Image from "next/image";

const UNESCO = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl text-center font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  UNWOMEN
                </h2>
                <div>
                  <p className="mb-10 text-base text-center font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Economic Empowerment of Women
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/unwomen.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    As the aim of the committee of UNWOMEN, the esteemed
                    delegates will be bringing the economic empowerment of
                    women’s to the table. They will discuss about women’s place
                    in the men dominated business and their financial rights. As
                    a result of this committee we will be expecting to find a
                    solution to help women advancing in their business career.
                  </p>
                </div>
              </div>
              <div
                id="apply"
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <a
                  href="/pdf/TALMUN_UN_WOMEN_STUDY_GUIDE.pdf"
                  download="TALMUN_UN_WOMEN_STUDY_GUIDE.pdf"
                  className="rounded-md bg-primary  py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/800"
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

export default UNESCO;
