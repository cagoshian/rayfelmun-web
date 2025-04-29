"use client";
import Image from 'next/image';
import styles from './imageWrapper.css';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        >
        <div className="flex justify-center mb-8">
          <Image
            src="/images/UN.png"
            alt="United Nations"
            width={800}
            height={400}
            className="rounded-x1"
          />
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] "
                data-wow-delay=".2s"
              >
                <br />
                <h1 className="mb-5 text-3xl font-bold leading-tight text-center text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Dear Esteemed Delegates, Chairs, and Participants,
                </h1>
                <br />
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  It is with great honor and excitement that I welcome you to RAYFELMUN 25,
                  the very first edition of our Model United Nations conference, hosted by
                  Ramazan Yaman Fen Lisesi. <br />
                  <br />
                  Organizing the first-ever MUN conference at our school has been an incredible
                  journey, and we are thrilled to share this experience with you. Our team has
                  worked tirelessly to create an environment where diplomacy, critical thinking,
                  and collaboration thrive. At RAYFELMUN 25, we aim to provide a platform for
                  young minds to engage with global issues, exchange ideas, and develop solutions
                  through debate and negotiation.
                  <br />
                  <br />
                  We believe that every delegate, chair, and participant will leave this conference
                  not only with valuable memories but also with enhanced skills, new friendships,
                  and a deeper understanding of the world around us.
                  <br />
                  <br />
                  I am confident that your passion, dedication, and contributions will make RAYFELMUN'25
                  a truly memorable event. On behalf of the entire RAYFELMUN 25 team, I warmly welcome
                  you and wish you the best of luck in your committees.
                  <br />
                  <br />
                  Looking forward to seeing the incredible impact you will make!
                  <br />
                  <br />
                  Sincerely,
                </p>
                <p className="mb-12 text-base font-normal !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Ulaş Gega <br />
                  Director General of RAYFELMUN'25
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
