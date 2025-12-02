"use client";
import CommonImage from "../Common/Image";
import { letterData } from "@/data/letters";
import { Card, CardGrid } from "../Common/Card";
import Countdown from "../Common/Countdown";

const Hero = () => {
  return (
      <section
	      id="home"
	      className="w-full flex flex-col gap-10 text-center items-center"
      >
          <CommonImage
            src="/images/UN.png"
            alt="United Nations"
            width={800}
            height={400}
            priority
            className="bg-dark"
          />

        <Countdown />
	      
          <CardGrid cols={3}>
            {letterData.map((letter, index) => (
              <Card
                key={index}
                title={letter.title}
                footer={
                  <p className="text-lg font-semibold text-right">
                    {letter.author} <br />
                    <span className="text-sm font-normal text-gray-300">{letter.role}</span>
                  </p>
                }
              >
                {letter.content}
              </Card>
            ))}
          </CardGrid>
      </section>
  );
};

export default Hero;
