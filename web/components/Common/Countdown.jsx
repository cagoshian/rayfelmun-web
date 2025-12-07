"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/Common/Card";

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
    <div className="w-full lg:w-[40%] max-w-[600px] mx-auto px-4 z-10 relative">
      <Card title="Countdown to RAYFELMUN'25" className="text-center">
        {timeLeft.isStarted ? (
          <div className="flex items-center justify-center h-[64px]">
             <p className="text-lg font-bold text-primary animate-pulse">
               RAYFELMUN'25 HAS OFFICIALLY STARTED!
             </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-6 justify-items-center mt-2">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <span className="text-2xl sm:text-4xl font-bold tabular-nums leading-none">
                  {item.value}
                </span>
                <p className="text-[10px] sm:text-sm font-medium text-gray-400 uppercase tracking-wider mt-1 sm:mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default Countdown;
