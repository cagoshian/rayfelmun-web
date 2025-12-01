"use client";
import { useEffect, useState } from "react";

const Countdown = ({ targetDate = "2025-12-13T09:00:00" }) => {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isStarted: false,
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  
  if (!timeLeft) return null;

  return (
    <div className="bg-dark text-white backdrop-blur-lg w-full lg:w-[30%] max-w-[500px] mx-5 py-6 rounded-2xl shadow-lg text-center">
      <h3 className="text-xl md:text-2xl font-bold mb-4">Countdown to RAYFELMUN'25</h3>
      
      {timeLeft.isStarted ? (
        <div className="flex items-center justify-center h-[64px]">
           <p className="text-lg font-bold text-primary animate-pulse">RAYFELMUN'25 HAS OFFICIALLY STARTED!</p>
        </div>
      ) : (
        <div className="flex gap-8 text-xl sm:text-2xl font-bold justify-center">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="tabular-nums">{item.value}</span>
              <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countdown;
