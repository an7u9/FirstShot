import React, { useEffect, useState } from 'react';

function Preview({ file }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setFileType(file.type.split('/')[0]); // 'image', 'video', 'audio', 'application', etc.
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
      setFileType(null);
    }
  }, [file]);

  if (!previewUrl) {
    return null; // Or a placeholder if you prefer
  }

  const renderPreview = () => {
    switch (fileType) {
      case 'image':
        return <img src={previewUrl} alt="Preview" className="img-fluid rounded shadow-sm" />;
      case 'video':
        return (
          <video controls className="img-fluid rounded shadow-sm">
            <source src={previewUrl} type={file.type} />
            Your browser does not support the video tag.
          </video>
        );
      case 'audio':
        return (
          <audio controls className="w-100 rounded shadow-sm">
            <source src={previewUrl} type={file.type} />
            Your browser does not support the audio tag.
          </audio>
        );
      case 'application':
        if (file.type === 'application/pdf') {
          return (
            <iframe
              src={previewUrl}
              title="PDF Preview"
              className="w-100 rounded shadow-sm"
              style={{height: '24rem', border: 'none'}}
            ></iframe>
          );
        }
        return <p className="text-muted">No direct preview available for {file.type} files.</p>;
      default:
        return <p className="text-muted">No direct preview available for this file type.</p>;
    }
  };

  return (
    <div className="mt-4 p-4 bg-light rounded shadow-sm">
      <h3 className="h6 fw-medium text-dark mb-2">File Preview:</h3>
      <div className="d-flex justify-content-center align-items-center">
        {renderPreview()}
      </div>
    </div>
  );
}

export default Preview;