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
                  <Link href="/unesco">UNESCO</Link>
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
                  <Link href="/disec">LEGAL</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Legalization of Abortion
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/legal.jpg"
                    alt="unesco"
                    className="hidden w-full dark:block"
                    width={250}
                    height={140}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Over the course of these three days, delegates will not only focus on legal matters within their committee but will also discuss morality and societal values. Introducing the agenda: The Legalization of Abortion.

                During the conference, delegates will debate whether abortion should be legalized and, if so, under what conditions it should be permitted. They will explore how national politics might be affected by this decision, what alternative solutions could address the impacts of abortion on people's lives, and other related issues.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href="/interpol">INTERPOL</Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Combating Transnational Cybercrime and Strengthening Cybersecurity Measures
                </p>
                <br />
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/interpol.jpg"
                    alt="unesco"
                    className="hidden w-full dark:block"
                    width={250}
                    height={140}
                  />
                </Link>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Over the course of these three days, the INTERPOL committee aims to bring delegates together to discuss combating transnational cybercrime and strengthening cybersecurity measures. Delegates will work on identifying remedies for the increasingly prevalent issue of cybercrime.
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
