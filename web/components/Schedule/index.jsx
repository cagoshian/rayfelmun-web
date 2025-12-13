"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import { scheduleData } from "@/data/schedule";
import { Card, CardGrid } from "../Common/Card";

const Schedule = () => {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
  
  const getEventStatus = (dateStr, timeRangeStr) => {
    if (!now) return "upcoming";
    const [startTimeStr, endTimeStr] = timeRangeStr.split("-").map((s) => s.trim());
    const startDate = new Date(`${dateStr} ${startTimeStr}`);
    const endDate = new Date(`${dateStr} ${endTimeStr}`);

    if (now > endDate) return "completed";
    if (now >= startDate && now <= endDate) return "current";
    return "upcoming";
  };
  
  const isDayFinished = (day) => {
    if (!now) return false;
    const lastEvent = day.events[day.events.length - 1];
    if (!lastEvent) return false;
	
    const [_, endTimeStr] = lastEvent.time.split("-").map((s) => s.trim());
    const dayEndDate = new Date(`${day.date} ${endTimeStr}`);
	
    return now > dayEndDate;
  };

  return (
    <section id="schedule" className="w-full flex flex-col gap-10">
      <SectionTitle title="Schedule" />

      <CardGrid cols={2}>
        {scheduleData.map((day) => {
          const finished = isDayFinished(day);

          return (
            <div key={day.id} className="relative h-full">
              {finished && (
                <div className="absolute inset-0 z-20 bg-black/60 rounded-xl flex items-center justify-center backdrop-blur-[1.5px]">
                  <span className="text-white/80 font-bold text-xl uppercase tracking-widest border-2 border-white/50 px-4 py-2 rounded-lg transform -rotate-12 select-none">
                    Completed
                  </span>
                </div>
              )}
	            
              <div className={`h-full transition-opacity duration-500 ${finished ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                <Card title={`${day.day} (${day.date})`}>
                  <div className="flex flex-col space-y-2">
                    {day.events.map((event, index) => {
                      const status = getEventStatus(day.date, event.time);
                      
                      let statusClasses;
                      
                      if (status === "completed") {
                        statusClasses = "opacity-50 grayscale";
                      } else if (status === "current") {
                        statusClasses = "bg-primary/20 border-l-4 border-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]";
                      } else {
                        statusClasses = "hover:bg-white/5 border-l-0";
                      }

                      return (
                        <div
                          key={index}
                          className={`flex flex-col sm:flex-row sm:items-center p-3 rounded-2xl transition-all duration-300 ${statusClasses}`}
                        >
                          <div className="w-full sm:w-[140px] flex-shrink-0">
                            <span className={`font-bold text-lg block mb-1 sm:mb-0 ${status === 'completed' ? 'text-gray-400' : 'text-primary'}`}>
                              {event.time}
                            </span>
                          </div>
                          
                          <div className={`w-full pl-0 sm:pl-4 border-l-0 sm:border-l-2 ${status === 'current' ? 'border-transparent' : 'border-primary/30'}`}>
                            <h4 className={`font-medium text-lg ${status === 'completed' ? 'text-gray-300' : 'text-white'}`}>
                              {event.title}
                              {status === "current" && (
                                <span className="ml-2 text-xs bg-primary text-black px-2 py-0.5 rounded-full font-bold uppercase align-middle animate-none inline-block">
                                  Now
                                </span>
                              )}
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </CardGrid>
    </section>
  );
};

export default Schedule;
