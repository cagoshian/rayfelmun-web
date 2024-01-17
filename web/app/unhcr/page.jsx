import Image from "next/image";

const UNHCR = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl text-center font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  UNHCR
                </h2>
                <div>
                  <p className="mb-10 text-base text-center font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Addressing The Global Refugee Crisis
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/unhcr.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    During the meeting of UNHCR; delegates will be addressing
                    one of the most important agendas: Refugee Crisis. They will
                    be covering the rights of refugees and also immigrants who
                    are in need. Delegates will be trying to embrace the
                    awareness to refugees for the aim of the meeting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UNHCR;
