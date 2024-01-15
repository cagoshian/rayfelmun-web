import SectionTitle from "../Common/SectionTitle";

const About = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mt-12">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <SectionTitle
              title="About"
              paragraph="TALMUN'24, organized by Tekirdağ Anatolian High School, will be a conference featuring four distinguished committees for the first time. The main objective of our conference is to introduce the MUN tradition to our city and students. Our primary goal is to increase our students' awareness of global issues. The conference will take place at the Tekirdağ Namık Kemal University campus, specifically in the Rectorate building and the Faculty of Arts and Sciences. Accommodation will be provided for participants coming from outside the city, excluding the registration fee. Lunch will be included in the registration fee for all three days of the conference. On the second night of the conference, a Social Event will be organized, open to all participants. During the closing ceremony, awards will be presented to participating delegates."
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
