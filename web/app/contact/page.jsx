import Contact from "@/components/Contact";

export async function generateMetadata() {
  return {
    title: "Contact",
    description: `Contact information for Rayfelmun'25`,
    openGraph: {
      title: `Contact - Rayfelmun'25`,
      description: "Contact information for Rayfelmun'25",
    },
  };
}

const ContactPage = () => {
	return (
		<Contact/>
	);
};

export default ContactPage;
