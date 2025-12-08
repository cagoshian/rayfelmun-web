import About from "@/components/About";

export async function generateMetadata() {
  return {
    title: "About",
    description: `Information about Rayfelmun'25`,
    openGraph: {
      title: `About Us - Rayfelmun'25`,
      description: "Information about Rayfelmun'25",
    },
  };
}

const AboutPage = () => {
	return (
		<About/>
	);
};

export default AboutPage;
