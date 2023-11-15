import SectionTitle from "../Common/SectionTitle";

const About = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <SectionTitle
              title="About"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor massa id. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Et malesuada fames ac turpis egestas sed tempus urna. Aenean et tortor at risus viverra. Tellus orci ac auctor augue. Eget gravida cum sociis natoque penatibus et magnis. Adipiscing elit duis tristique sollicitudin nibh. Aliquet enim tortor at auctor urna nunc. Semper feugiat nibh sed pulvinar proin gravida. Egestas sed tempus urna et pharetra pharetra massa. Vel turpis nunc eget lorem dolor sed."
              center
              mb="44px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
