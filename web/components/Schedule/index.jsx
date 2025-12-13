import SectionTitle from "../Common/SectionTitle";
import { scheduleData } from "@/data/schedule";
import { Card, CardGrid } from "../Common/Card";

const Schedule = () => {
  const isDayOver = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    eventDate.setHours(18, 0, 0);
    return today > eventDate;
  };

  return (
    <section id="schedule" className="w-full flex flex-col gap-10">
      <SectionTitle title="Schedule" />

      <CardGrid cols={2}>
        {scheduleData.map((day) => {
          const finished = isDayOver(day.date);

          return (
            <div key={day.id} className="relative h-full">
              {finished && (
                <div className="absolute inset-0 z-10 bg-black/60 rounded-xl flex items-center justify-center backdrop-blur-[2px]">
                   <span className="text-white/80 font-bold text-xl uppercase tracking-widest border-2 border-white/50 px-4 py-2 rounded-lg transform -rotate-12">
                     Completed
                   </span>
                </div>
              )}
	            
              <div className={`${finished ? 'opacity-50 grayscale pointer-events-none' : ''} h-full`}>
                <Card title={`${day.day} (${day.date})`}>
                  <div className="flex flex-col space-y-2">
                    {day.events.map((event, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center p-3 hover:bg-white/5 rounded-2xl transition-colors"
                      >
                        <div className="w-full sm:w-[140px] flex-shrink-0">
                          <span className="text-primary font-bold text-lg block mb-1 sm:mb-0">
                            {event.time}
                          </span>
                        </div>
                        <div className="w-full pl-0 sm:pl-4 border-l-0 sm:border-l-2 border-primary/30">
                          <h4 className="font-medium text-white text-lg">
                            {event.title}
                          </h4>
                        </div>
                      </div>
                    ))}
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
