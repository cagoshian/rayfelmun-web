const Card = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
        <div
          className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
          data-wow-delay=".2s"
        >
          <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
          To be announced...
          </h3>
          {/* <p className="mb-11 text-base font-medium leading-relaxed text-body-color">
            Bahçeli/Ankara
          </p>
          <p className="mb-11 pb-3 text-base font-medium leading-relaxed text-body-color">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Card;
