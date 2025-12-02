import SectionTitle from "../Common/SectionTitle";
import {scheduleData} from "@/data/schedule";
import {Card, CardGrid} from "../Common/Card";

const Schedule = () => {
	return (
		<section
			id="schedule"
			className="w-full flex flex-col gap-10"
		>
			<SectionTitle
				title="Schedule"
				center
			/>
			
			<CardGrid cols={2}>
				{scheduleData.map((day) => (
					<Card
						key={day.id}
						title={`${day.day} (${day.date})`}
					>
						<div className="flex flex-col space-y-2">
							{day.events.map((event, index) => (
								<div key={index} className="flex flex-col sm:flex-row sm:items-center p-3 hover:bg-white/5 rounded-2xl transition-colors">
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
				))}
			</CardGrid>
		</section>
	);
};

export default Schedule;
