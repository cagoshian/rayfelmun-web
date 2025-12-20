import { google } from 'googleapis';
import { unstable_cache } from 'next/cache';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

async function fetchDriveFiles(folderId) {
  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: 'files(id, name, mimeType, thumbnailLink, webViewLink, parents, imageMediaMetadata)',
      orderBy: 'folder, name',
      pageSize: 100,
    });

    const files = response.data.files || [];

    return files.map((file) => {
      const reliableImageSrc = `https://drive.google.com/thumbnail?id=${file.id}&sz=w800`;

      return {
        id: file.id,
        name: file.name,
        type: file.mimeType === 'application/vnd.google-apps.folder' ? 'folder' : 'image',
        imageSrc: reliableImageSrc,
        originalLink: file.webViewLink,
        width: file.imageMediaMetadata?.width || 800,
        height: file.imageMediaMetadata?.height || 600,
      };
    });
  } catch (error) {
    console.error(`[Drive API Error] fetchDriveFiles: ${error.message}`);
    return [];
  }
}

async function fetchFolderMetadata(folderId) {
  try {
    const response = await drive.files.get({
      fileId: folderId,
      fields: 'id, name, parents',
      supportsAllDrives: true,
    });

    return response.data;
  } catch (error) {
    console.error(`[Drive API Error] fetchFolderMetadata: ${error.message}`);
    return null;
  }
}

export const getDriveFiles = unstable_cache(
  async (folderId) => fetchDriveFiles(folderId),
  ['drive-folder-contents'],
  { revalidate: 3600 }
);

export const getFolderMetadata = unstable_cache(
  async (folderId) => fetchFolderMetadata(folderId),
  ['drive-folder-metadata'],
  { revalidate: 3600 }
);
