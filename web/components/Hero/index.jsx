"use client";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] "
                data-wow-delay=".2s"
              >
                <br />
                <h1 className="mb-5 text-3xl font-bold leading-tight text-center text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Esteemed Delegates,
                </h1>
                <br />
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  We are grateful to have you here, at RAYFELMUN'25 which will be held on May 10th and 11th. <br />
                  <br />
                  RAYFELMUN'25 is a milestone for us. We are starting a journey for RAYFEL,
                  for Lüleburgaz. We are becoming a guide for other schools in our city and
                  we are honored by it.
                  <br />
                  <br />
                  For these two days our precious delegates will address the issues in committees
                  they have chosen. Their brilliant minds will lead the way to the future. RAYFELMUN
                  is not just a conference, it is a future-changing event. Young minds will change the
                  world in this prestigious conference.
                  <br />
                  <br />
                  Our diligent and caring team is ready to welcome you over the next two days. Our
                  team has been working non-stop. They have done amazing work for this conference
                  and they are going to prove it. I, as the Secretary General of this conference,
                  truly believe in my incredible team.
                  <br />
                  <br />
                  We are eager to see you in our classrooms while debating, expressing your ideas
                  and standing up for youth, future and humanity. We wish you a wonderful conference experience.
                  <br />
                  <br />
                  Kind regards,
                </p>
                <p className="mb-12 text-base font-normal !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Ekin Sezer <br />
                  Secretary General of RAYFELMUN'25
                </p>
                {/* <div
                  id="apply"
                  className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                  <Link
                    href="https://forms.gle/nue5VETdAjaFc5J76"
                    className="rounded-md bg-primary py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/800"
                  >
                    Apply As A Delegate
                  </Link>
                  <Link
                    href="https://forms.gle/qyZpcHtGkAuijK8g7"
                    className="rounded-md bg-primary py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/800"
                  >
                    Apply As A Delegation
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
