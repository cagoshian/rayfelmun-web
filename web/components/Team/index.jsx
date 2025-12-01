import { teamMembers } from "@/data/team";
import { CardGrid } from "../Common/Card";
import CommonImage from "../Common/Image";

const Team = () => {
	return (
		<section
			id="team"
			className="w-full"
		>
			<CardGrid cols={3}>
				{teamMembers.map((member) => (
					<CommonImage
						key={member.id}
						src={member.img}
						alt={member.alt}
						fill
						data-wow-delay=".1s"
						className="wow fadeInUp aspect-square w-full"
					/>
				))}
			</CardGrid>
		</section>
	);
};

export default Team;
