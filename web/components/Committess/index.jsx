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
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href="/committees/1">UNESCO</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Cultural heritage and World heritage sites
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/unesco.jpg"
                    alt="unesco"
                    className="hidden w-full dark:block"
                    width={250}
                    height={140}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Within the esteemed United Nations Educational, Scientific and
                  Cultural Organization committee, delegates will be discussing
                  the importance of World Heritage Sites, the unique aspects of
                  their cultural heritages, and the international organizations
                  established to cover these valuable treasures
                </p>
              </div>
            </div>
            <br />
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href="/committees/2">DISEC</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Prevention and Control of WMD Proliferation
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/disec.jpg"
                    alt="unesco"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The DISEC meeting is happening to deal with the global WMD
                  problem. We'll figure out ways to stop these dangerous weapons
                  from spreading and being misused, making the world safer. As
                  security stewards, we'll discuss about creative solutions for
                  disarmament and lasting peace across borders.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href="/committees/1">UNHCR</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Addressing the global refugee crisis
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/unhcr.jpg"
                    alt="unesco"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  During the meeting of UNHCR; delegates will be addressing one
                  of the most important agendas: Refugee Crisis. They will be
                  covering the rights of refugees and also immigrants who are in
                  need. Delegates will be trying to embrace the awareness to
                  refugees for the aim of the meeting.
                </p>
              </div>
            </div>
            <br />
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href="/committees/2">UNWOMEN</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Economic empowerment of women
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/unwomen.jpg"
                    alt="unesco"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  As the aim of the committee of UNWOMEN, the esteemed delegates
                  will be bringing the economic empowerment of women’s to the
                  table. They will discuss about women’s place in the men
                  dominated business and their financial rights. As a result of
                  this committee we will be expecting to find a solution to help
                  women advancing in their business career.
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
