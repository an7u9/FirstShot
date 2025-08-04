import { exiftool } from 'exiftool-vendored';

export const extractMetadata = async (filePath) => {
  try {
    const tags = await exiftool.read(filePath);
    // Filter out unwanted tags and format the output
    const filteredTags = Object.fromEntries(
      Object.entries(tags).filter(([key, value]) => {
        // Exclude internal ExifTool tags and empty values
        return !key.startsWith('ExifTool') &&
               !key.startsWith('SourceFile') &&
               !key.startsWith('Directory') &&
               !key.startsWith('FileName') &&
               !key.startsWith('FileSize') &&
               !key.startsWith('FilePermissions') &&
               !key.startsWith('FileTypeExtension') &&
               !key.startsWith('MIMEType') &&
               value !== undefined && value !== null && value !== '';
      })
    );
    return filteredTags;
  } catch (error) {
    console.error(`Error extracting metadata from ${filePath}:`, error);
    throw new Error('Failed to extract metadata');
  }
};