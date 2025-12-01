import SectionTitle from "../Common/SectionTitle";
// Veriyi import ediyoruz
import {scheduleData} from "@/data/schedule";

const Schedule = () => {
	return (
		<section id="schedule">
			<SectionTitle
				title="Schedule"
				center
			/>
			
			<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12">
				{scheduleData.map((day) => (
					<div
						key={day.id}
						className="w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 text-white shadow-lg shadow-gray-dark"
					>
						<h3 className="mb-6 text-2xl font-bold text-white border-b pb-4 border-white/[.15]">
							{day.day} <span className="text-lg font-medium text-body-color ml-2">({day.date})</span>
						</h3>
						
						<div className="flex flex-col space-y-6">
							{day.events.map((event, index) => (
								<div key={index} className="flex flex-col sm:flex-row sm:items-center">
									<div className="w-full sm:w-[140px] flex-shrink-0">
                      <span className="text-primary font-semibold text-lg block mb-1 sm:mb-0">
                        {event.time}
                      </span>
									</div>
									<div className="w-full pl-0 sm:pl-4 border-l-0 sm:border-l-2 border-primary/20">
										<h4 className="font-medium text-white text-lg">
											{event.title}
										</h4>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Schedule;
