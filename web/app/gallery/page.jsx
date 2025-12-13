import Gallery from "@/components/Gallery";

export async function generateMetadata() {
  return {
    title: "Gallery",
    description: `Photo gallery of Rayfelmun'25`,
    openGraph: {
      title: `Gallery - Rayfelmun'25`,
      description: "Photo gallery of Rayfelmun'25",
    },
  };
}

const GalleryPage = () => {
	return (
		<Gallery/>
	);
};

export default GalleryPage;
