import Image from "next/image";

const UNESCO = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl text-center font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                  INTERPOL
                </h2>
                <div>
                  <p className="mb-10 text-base text-center font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The International Criminal Police Organization
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded-2xl">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/cabinet.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    As the INTERPOL committee, we recognize drug trafficking as a major global threat that fuels crime and instability. Our mission is to adress the major issues, combat it through enhanced international cooperation, intelligence sharing, and support for law enforcement and border control. By working together, we can effectively dismantle trafficking networks and reduce the harm caused by illicit drugs worldwide.
                  </p>
                </div>
              </div>
              <div
                id="apply"
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <a
                  href="/pdf/RAYFELMUN STUDY GUIDE INTERPOL.pdf"
                  download="RAYFELMUN STUDY GUIDE INTERPOL.pdf"
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

export default UNESCO;
