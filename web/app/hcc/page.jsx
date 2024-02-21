import Image from "next/image";

const CABINET = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl text-center font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  HCC: Historical Crisis Cabinet
                </h2>
                <div>
                  <p className="mb-10 text-base text-center font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Agenda Item: Chernobyl Disaster
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/chernobyl.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    In the intriguing Historical Crisis Cabinet, participants are poised to delve into the complexities of the Chernobyl Disaster. Over the span of three days, delegates will not only grapple with the challenge of averting potential dangers at the Chernobyl Nuclear Power Plant but also tackle a myriad of issues sent from the crisis room. It's an immersive experience that invites individuals to actively engage in problem-solving, making it a unique opportunity for those with a keen interest in history, crisis management, and decision-making. If you're passionate about exploring the intricacies of historical events and contributing to solutions, don't miss the chance to apply and become an integral part of this captivating cabinet experience!
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

export default CABINET;
