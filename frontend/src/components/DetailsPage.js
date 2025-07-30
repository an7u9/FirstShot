import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MetadataDisplay from './MetadataDisplay';
import Preview from './Preview';
import Navbar from './Navbar';

function DetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { metadata, fileName, file } = location.state || {};

  if (!metadata) {
    return (
      <div style={{background: 'rgb(244,243,242)', minHeight: '100vh'}}>
        <Navbar />
        <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{minHeight: '80vh'}}>
          <div className="alert alert-warning text-center">No metadata to display. Please go back and upload a file.</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{background: 'rgb(244,243,242)', minHeight: '100vh'}}>
      <Navbar />
      <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{minHeight: '80vh'}}>
        <div className="row w-100 justify-content-center align-items-stretch" style={{maxWidth: '900px'}}>
          <div className="col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0">
            <Preview file={file} />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="w-100 p-4 rounded shadow-sm" style={{background: '#e3f0fa', minHeight: '340px'}}>
              <h1 className="h5 fw-bold text-primary text-center mb-4">Metadata Details for {fileName}</h1>
              <MetadataDisplay metadata={metadata} />
              <button
                onClick={() => navigate('/')} 
                className="mt-4 w-100 btn btn-primary"
              >
                Reveal another Shot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;