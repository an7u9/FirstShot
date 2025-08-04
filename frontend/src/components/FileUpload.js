import React, { useRef } from 'react';
import styles from '../styles/FileUpload.module.css';

function FileUpload({ onFileUpload }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div
      className={styles.dropZone}
      tabIndex={0}
      aria-label="File upload drop zone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="text-center w-100">
        <svg
          className="mx-auto mb-2"
          style={{height: '48px', width: '48px', color: '#6c757d'}}
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="d-flex text-secondary justify-content-center align-items-center">
          <label
            htmlFor="file-upload"
            className={styles.uploadLabel}
          >
            <span>Upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              style={{display: 'none'}}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
          <span className="ps-1">or drag and drop</span>
        </div>
        <p className={styles.uploadInfo}>
          Any file type up to 100MB
        </p>
      </div>
    </div>
  );
}

export default FileUpload;