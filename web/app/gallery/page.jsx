import Gallery from "@/components/Gallery/mainPage.jsx";

export async function generateMetadata() {
  return {
    title: "Gallery",
    description: `Memories from Rayfelmun'25`,
    openGraph: {
      title: `Gallery - Rayfelmun'25`,
      description: "Memories from Rayfelmun'25",
    },
  };
}

const GalleryMainPage = () => {
	return (
		<Gallery/>
	);
};

export default GalleryMainPage;
