import SectionTitle from "../Common/SectionTitle";

const About = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mt-12">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <SectionTitle
              title="About"
              paragraph="TALMUN'24 is set to make history as our first conference featuring five distinguished committees. Our primary aim is to introduce the Model United Nations (MUN) tradition to our city and students. Focused on enhancing global awareness among our participants, the conference will unfold at the Tekirdağ Namık Kemal University campus, specifically in the impressive settings of the Rectorate building and the Faculty of Arts and Sciences. For participants traveling from outside the city, accommodation will be graciously provided, excluding the registration fee. The registration fee will cover lunch for all three days of the conference. An enticing Social Event awaits participants on the second night, adding an enjoyable dimension to the MUN journey.And at the end of it all, we'll have a closing ceremony where we'll recognize and award outstanding participants. TALMUN'24 is more than just a conference; it's a beautiful opportunity to cultivate knowledge, foster connections, and make lasting memories.              "
              center
              mb="44px"
            ><p className="text-base text-center items-center !leading-relaxed text-body-color md:text-lg">
                {/* <br />
                Sincerely,
                <br /> */}
                {/* <br />
                Masal Naz Çalışkan */}
                {/* <br />
                Under Secretary General of TALMUN'24 */}
              </p></SectionTitle>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
