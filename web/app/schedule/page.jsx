import Schedule from "@/components/Schedule";

export async function generateMetadata() {
  return {
    title: "Schedule",
    description: `Schedule for Rayfelmun'25`,
    openGraph: {
      title: `Schedule - Rayfelmun'25`,
      description: "Schedule for Rayfelmun'25",
    },
  };
}

const SchedulePage = () => {
	return (
		<Schedule/>
	);
};

export default SchedulePage;
