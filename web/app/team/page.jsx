import Team from "@/components/Team";

export async function generateMetadata() {
  return {
    title: "Team",
    description: `Rayfelmun'25 Organization Team`,
    openGraph: {
      title: `Team - Rayfelmun'25`,
      description: "Rayfelmun'25 Organization Team",
    },
  };
}

const TeamPage = () => {
	return (
		<Team/>
	);
};

export default TeamPage;
