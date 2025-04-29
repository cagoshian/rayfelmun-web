const Card = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
        <div
          className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
          data-wow-delay=".2s"
        >
          <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
10th May Saturday
09.00 – 09.30: Registration
09.30 – 10.30: Opening Ceremony
10.45 – 12.30: Committee Session
12.30 – 13.30: Lunch 
13.30 – 15.00: Committee Session
15.00 – 15.30: Coffee Break
15.30 – 17.00: Committee Session
          </h3>

          <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
11th May Sunday
09.00 – 10.30: Committee Session
10.30 – 11.00: Coffee Break
11.00 – 12.30: Committee Session
12.30 – 13.30: Lunch 
13.30 – 15.00: Committee Session
15.00 – 15.30: Coffee Break
15.30 – 17.00: Committee Session
17.00 – 18.00: Closing Ceremony
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Card;
