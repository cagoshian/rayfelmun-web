import Link from 'next/link';
import Image from 'next/image';

const GalleryItem = ({ item, currentId }) => {
  const isFolder = item.type === 'folder';

  const content = (
    <div className="group relative overflow-hidden rounded-xl bg-black border border-white hover:border-blue-500 transition-all duration-300 shadow-lg">
      <div className="aspect-square relative w-full">
        {isFolder ? (
          <div className="flex flex-col items-center justify-center h-full text-blue-400 group-hover:text-blue-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 mb-2">
              <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
            </svg>
            <span className="text-sm font-semibold text-gray-300 px-4 text-center">
              {item.name}
            </span>
          </div>
        ) : (
          <Image
            src={item.imageSrc}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {!isFolder && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a
            href={item.originalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition"
            title="Orijinali Aç"
          >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
              </svg>
          </a>
        </div>
      )}
    </div>
  );
  
  if (isFolder) {
    return <Link href={`/gallery/${item.id}?parent=${currentId}`}>{content}</Link>;
  }

  return <div>{content}</div>;
};

export default GalleryItem;
