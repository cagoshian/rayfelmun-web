import { getFolderMetadata, getDriveFiles } from "@/lib/drive.js";
import GalleryItem from "@/components/Common/GalleryItem";
import Link from "next/link";

const GallerySubfolder = async ({ params, searchParams }) => {
	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;
	
	const currentFolderId = resolvedParams.id;
	const parentIdFromUrl = resolvedSearchParams?.parent;
	const rootFolderId = process.env.NEXT_PUBLIC_DRIVE_ROOT_FOLDER_ID;
	
	const [files, currentFolder] = await Promise.all([
		getDriveFiles(currentFolderId),
		getFolderMetadata(currentFolderId)
	]);
	
	let backLink = '/gallery';
	let backLabel = 'Main Gallery';
	
	if (parentIdFromUrl && parentIdFromUrl !== rootFolderId) {
		backLink = `/gallery/${parentIdFromUrl}`;
		backLabel = 'Previous Folder';
	}
	
	return (
		<section id="gallery" className="w-full flex flex-col gap-10 text-center items-center">
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
					<Link
						href={backLink}
						className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition border border-gray-700"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
						</svg>
						Back to {backLabel}
					</Link>
					
					<h1 className="text-2xl font-bold text-white text-center md:text-right">
						{currentFolder?.name || 'Folder'}
					</h1>
				</div>
			
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{files.length > 0 ? (
						files.map((file) => (
							<GalleryItem key={file.id} item={file} currentId={currentFolderId}/>
						))
					) : (
						<div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400 bg-gray-800/30 rounded-xl border border-gray-700 border-dashed">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-3 opacity-50">
								<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
							</svg>
							<p className="text-lg">No photos found in this folder.</p>
						</div>
					)}
				</div>
		</section>
	);
};

export default GallerySubfolder;
