import Image from "next/image";
import {teamMembers} from "@/data/team";

const Team = () => {
	return (
		<section
			id="team"
			className="w-full flex flex-wrap justify-center gap-y-10"
		>
				{teamMembers.map((member) => (
					<div key={member.id} className="w-full px-4 sm:w-1/2 lg:w-1/3">
						<div
							className="wow fadeInUp group relative z-10 mx-auto overflow-hidden rounded-xl bg-dark shadow-lg"
							data-wow-delay=".1s"
						>
							<div className="relative aspect-square w-full">
								<Image
									src={member.img}
									alt={member.alt}
									fill
									className="object-cover object-center transition duration-300 group-hover:scale-110"
								/>
							</div>
						</div>
					</div>
				))}
		</section>
	);
};

export default Team;
