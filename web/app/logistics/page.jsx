import Location from "@/components/Map";

export async function generateMetadata() {
  return {
    title: "Logistics",
    description: `Logistics information for Rayfelmun'25`,
    openGraph: {
      title: `Logistics - Rayfelmun'25`,
      description: "Logistics information for Rayfelmun'25",
    },
  };
}

const LogisticsPage = () => {
	return (
		<Location/>
	);
};

export default LogisticsPage;
