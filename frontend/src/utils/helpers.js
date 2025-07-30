export const formatMetadata = (metadata) => {
    // Example helper: format metadata for display
    // This can be expanded based on specific formatting needs
    if (!metadata) return {};

    const formatted = {};
    for (const key in metadata) {
      if (Object.hasOwnProperty.call(metadata, key)) {
        let value = metadata[key];
        // Example: If a value is an array, join it with a comma
        if (Array.isArray(value)) {
          value = value.join(', ');
        }
        // Example: Capitalize keys for display
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
        formatted[formattedKey] = value;
      }
    }
    return formatted;
  };
  
  export const getFileExtension = (filename) => {
    return filename.split('.').pop();
  };
  
  export const getFileNameWithoutExtension = (filename) => {
    const parts = filename.split('.');
    if (parts.length > 1) {
      parts.pop();
      return parts.join('.');
    }
    return filename;
  };