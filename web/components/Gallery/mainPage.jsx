import SectionTitle from "../Common/SectionTitle";
import { getDriveFiles } from "@/lib/drive.js";
import GalleryItem from "@/components/Common/GalleryItem.jsx";

const Gallery = async () => {
	const rootFolderId = process.env.NEXT_PUBLIC_DRIVE_ROOT_FOLDER_ID;
	const files = await getDriveFiles(rootFolderId);
	
  return (
    <section id="gallery" className="w-full flex flex-col gap-10 text-center items-center">
        <SectionTitle
          title="Gallery"
          paragraph="Memories from Rayfelmun'25. Select a folder to view photos."
        />

        {files.length === 0 ? (
          <div className="text-center text-gray-400">Loading or empty folder...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {files.map((file) => (
              <GalleryItem key={file.id} item={file} currentId={rootFolderId} />
            ))}
          </div>
        )}
    </section>
  );
};

export default Gallery;
