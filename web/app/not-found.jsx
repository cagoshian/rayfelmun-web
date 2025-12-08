import NotFound from "@/components/NotFound";

export async function generateMetadata() {
  return {
    title: "Not Found",
    description: `Page not found - Rayfelmun'25`,
    openGraph: {
      title: `Not Found - Rayfelmun'25`,
      description: "Page not found - Rayfelmun'25",
    },
  };
}

const Not_Found = () => {
	return (
		<NotFound/>
	);
};

export default Not_Found;
