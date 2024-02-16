// import Image from "next/image";

const CABINET = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl text-center font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Chernobyl Disaster Agenda Item
                </h2>
                <div>
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
                  {/* <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    From the moment he assumed the presidency in 1993, his
                    actions have made him one of America's most memorable
                    presidents up until his last year in the office, 2001.
                    During Bill Clinton's presidency, the U.S. experienced one
                    of the most prosperous economic periods in its entire
                    history. He had one of the lowest unemployment rates in
                    history, the lowest inflation in decades, the highest number
                    of homeowners, the lowest crime rate, and the strongest
                    people economically. "It's the economy, stupid!" was the
                    slogan he used to attract public attention in his campaigns.
                    If you're determined to take big steps to make America the
                    best it can be, just the way Clinton did it himself, this
                    crisis cabinet is the place for you!
                  </p> */}
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
