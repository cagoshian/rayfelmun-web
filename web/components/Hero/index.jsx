"use client";
import Image from 'next/image';
import styles from './imageWrapper.css';


const letters = [
    {
  title: "Esteemed Delegates,",
  content: `
  We are grateful to have you here, at RAYFELMUN'25 which will be held on May 10th and 11th.

  RAYFELMUN'25 is a milestone for us. We are starting a journey for RAYFEL, for Lüleburgaz. We are becoming a guide for other schools in our city and we are honored by it.

  For these two days our precious delegates will address the issues in committees they have chosen. Their brilliant minds will lead the way to the future. RAYFELMUN is not just a conference, it is a future-changing event. Young minds will change the world in this prestigious conference.

  Our diligent and caring team is ready to welcome you over the next two days. Our team has been working non-stop. They have done amazing work for this conference and they are going to prove it. I, as the Secretary General of this conference, truly believe in my incredible team.

  We are eager to see you in our classrooms while debating, expressing your ideas and standing up for youth, future and humanity. We wish you a wonderful conference experience.

  Kind regards,
  `,
  author: "Ekin Sezer",
  role: "Secretary General of RAYFELMUN'25",
    },
  {
    title: "Dear Esteemed Delegates, Chairs, and Participants,",
    content: `
    It is with great honor and excitement that I welcome you to RAYFELMUN 25, the very first edition of our Model United Nations conference, hosted by Ramazan Yaman Fen Lisesi.

    Organizing the first-ever MUN conference at our school has been an incredible journey, and we are thrilled to share this experience with you. Our team has worked tirelessly to create an environment where diplomacy, critical thinking, and collaboration thrive. At RAYFELMUN 25, we aim to provide a platform for young minds to engage with global issues, exchange ideas, and develop solutions through debate and negotiation.

    We believe that every delegate, chair, and participant will leave this conference not only with valuable memories but also with enhanced skills, new friendships, and a deeper understanding of the world around us.

    I am confident that your passion, dedication, and contributions will make RAYFELMUN'25 a truly memorable event. On behalf of the entire RAYFELMUN 25 team, I warmly welcome you and wish you the best of luck in your committees.

    Looking forward to seeing the incredible impact you will make!

    Sincerely,
    `,
    author: "Ulaş Gega",
    role: "Director General of RAYFELMUN'25",
  },
{
  title: "Esteemed Delegates,",
  content: `
  It is a great honor to welcome you to this distinguished conference. This event holds significant meaning not only for me, but also for my dedicated team and the city of Lüleburgaz. This Model United Nations conference marks the very first of its kind to be held in Lüleburgaz, and I am proud to state that we have devoted considerable effort to ensure that you, our honorable delegates, have a memorable and exceptional first experience.

  Over the course of these two days, you, our esteemed delegates, will at times seek solutions to various issues, at times engage in debates, at times defend your positions, and at times simply enjoy yourselves to the fullest.

  Our teams have worked tirelessly for weeks, pushing their limits and striving to bring out the very best in themselves. They have done an outstanding job in preparing for this conference, and I have no doubt that they will present their accomplishments to you flawlessly. As the Deputy Secretary-General of this conference, I take great pride in all of my teams and extend my heartfelt gratitude to each and every one of them.

  We eagerly await to witness you in debates, in defenses, occasionally in deadlocks, and at times reaching meaningful agreements within our school. I wish you all a memorable and outstanding conference experience.
  `,
  author: "Betül Ece Altun",
  role: "Deputy General of RAYFELMUN'25",
},
];


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
            className="rounded-2xl"
          />
        </div>

        <div className="overflow-x-auto">
          <div className="flex justify-center gap-6 w-full max-w-screen-3xl mx-auto">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="w-full max-w-[600px] bg-white/5 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{letter.title}</h2>
              <p className="text-base md:text-lg leading-relaxed mb-6 whitespace-pre-line">
                {letter.content}
              </p>
              <p className="text-lg font-semibold text-right">
                {letter.author} <br />
                <span className="text-sm font-normal">{letter.role}</span>
              </p>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
