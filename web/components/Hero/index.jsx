"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { letterData } from "@/data/letters";


const Hero = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-13T09:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
      <section
        id="home"
        className="relative z-10 overflow-hidden"
        >
        <div className="flex justify-center mb-8 mx-5">
          <Image
            src="/images/UN.png"
            alt="United Nations"
            width={800}
            height={400}
            className="rounded-2xl bg-dark"
          />
        </div>

        {timeLeft ? (
          <div className="flex justify-center mb-10">
            <div className="bg-dark text-white backdrop-blur-lg w-full lg:w-[30%] max-w-[500px] mx-5 py-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Countdown to RAYFELMUN'25</h3>
              <div className="flex gap-8 text-xl sm:text-2xl font-bold justify-center">
                <div>
                  <span>{timeLeft.days}</span>
                  <p className="text-sm font-medium">Days</p>
                </div>
                <div>
                  <span>{timeLeft.hours}</span>
                  <p className="text-sm font-medium">Hours</p>
                </div>
                <div>
                  <span>{timeLeft.minutes}</span>
                  <p className="text-sm font-medium">Minutes</p>
                </div>
                <div>
                  <span>{timeLeft.seconds}</span>
                  <p className="text-sm font-medium">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
            <div className="flex justify-center mb-10">
            <div className="bg-dark text-white backdrop-blur-lg w-full lg:w-[30%] max-w-[500px] mx-5 py-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Countdown to RAYFELMUN'25</h3>
              <p className="text-lg font-medium">RAYFELMUN'25 HAS BEEN OFFICIALLY STARTED!</p>
            </div>
          </div>
        )}

        <div className="overflow-x-auto h-full">
          <div className="flex lg:flex-row flex-col items-center justify-center gap-6 w-full max-w-screen-3xl px-5">
          {letterData.map((letter, index) => (
            <div
              key={index}
              className="w-full lg:w-[30%] max-w-[500px] bg-white/5 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg flex flex-col"
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
  );
};

export default Hero;
