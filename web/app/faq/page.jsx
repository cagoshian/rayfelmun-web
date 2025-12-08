import Faq from "@/components/Faq";

export async function generateMetadata() {
  return {
    title: "FAQ",
    description: `Frequently Asked Questions for Rayfelmun'25`,
    openGraph: {
      title: `FAQ - Rayfelmun'25`,
      description: "Frequently Asked Questions for Rayfelmun'25",
    },
  };
}

const FaqPage = () => {
	return (
		<Faq/>
	);
};

export default FaqPage;
