import SectionTitle from "@/components/Common/SectionTitle";

const days = [
  {
    day: "First Day - 13rd December",
    content: `
    09.00 - 09.30: Registration
    09.30 - 10.30: Opening Ceremony
    10.45 - 12.30: Committee Session
    12.30 - 13.30: Lunch
    13.30 - 15.00: Committee Session
    15.00 - 15.30: Coffee Break
    15.30 - 17.00: Committee Session
    `,
  },
  {
    day: "Second Day - 14th December",
    content: `
    09.00 - 10.30: Committee Session
    10.30 - 11.00: Coffee Break
    11.00 - 12.30: Committee Session
    12.30 - 13.30: Lunch
    13.30 - 15.00: Committee Session
    15.00 - 15.30: Coffee Break
    15.30 - 17.00: Committee Session
    17.00 - 18.00: Closing Ceremony
  `,
  },
];

const Schedule = () => {
  return (
    <section id="schedule">
            <SectionTitle title="Schedule" center/>

            <div className="overflow-x-auto h-full">
              <div
                className="flex lg:flex-row flex-col items-center justify-center gap-6 w-full max-w-screen-3xl px-5">
                {days.map((day, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-[30%] max-w-[500px] bg-white/5 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg flex flex-col"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">{day.day}</h2>
                    <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {day.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
    </section>
  );
};

export default Schedule;
