import { getFolderMetadata } from '@/lib/drive';
import GallerySubfolder from "@/components/Gallery/subfolders.jsx";

export async function generateMetadata({params}) {
	const resolvedParams = await params;
	const folder = await getFolderMetadata(resolvedParams.id);
  return {
    title: `${folder?.name || 'Folder'} | Gallery`,
    description: `Memories from Rayfelmun'25`,
    openGraph: {
      title: `${folder?.name || 'Folder'} - Gallery - Rayfelmun'25`,
      description: "Memories from Rayfelmun'25",
    },
  };
}

const GallerySubfolders = ({ params, searchParams }) => {
	return (
		<GallerySubfolder params={params} searchParams={searchParams}/>
	);
};

export default GallerySubfolders;
