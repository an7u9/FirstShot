import React from 'react';

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <div className="spinner-border" role="status" style={{width: '2rem', height: '2rem'}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="ms-2 text-secondary">Loading...</p>
    </div>
  );
}

export default LoadingSpinner;