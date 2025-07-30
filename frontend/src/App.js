import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import MetadataDisplay from './components/MetadataDisplay';
import Message from './components/Message';
import LoadingSpinner from './components/LoadingSpinner';
import Preview from './components/Preview';
import DetailsPage from './components/DetailsPage';
import { extractMetadata } from './utils/api';
import Navbar from './components/Navbar';

function Home() {
  const [metadata, setMetadata] = useState(null);
  const [fileName, setFileName] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = async (uploadedFile) => {
    setLoading(true);
    setMessage(null);
    setMetadata(null);
    setFile(uploadedFile);

    try {
      const data = await extractMetadata(uploadedFile);
      setMetadata(data.metadata);
      setFileName(data.fileName);
      setMessage({ type: 'success', text: 'Metadata extracted successfully!' });
      navigate('/details', { state: { metadata: data.metadata, fileName: data.fileName, file: uploadedFile } });
    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: 'error', text: error.message || 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMetadata(null);
    setFileName('');
    setMessage(null);
    setLoading(false);
    setFile(null);
  };

  return (
    <div style={{background: 'rgb(244,243,242)', minHeight: '100vh'}}>
      <Navbar />
      <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{minHeight: '80vh'}}>
        <div className="card shadow-lg p-4" style={{maxWidth: '420px', width: '100%'}}>
          <div className="text-center mb-4">
            <h1 className="h4 fw-bold text-dark">FirstShot</h1>
            <p className="text-muted mb-0">Every shot has a story, we Reveal it!</p>
          </div>
          <FileUpload onFileUpload={handleFileUpload} />
          {loading && <LoadingSpinner />}
          {message && <Message type={message.type} text={message.text} />}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;