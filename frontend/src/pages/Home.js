import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/FileUpload';
import Message from '../components/Message';
import LoadingSpinner from '../components/LoadingSpinner';
import Navbar from '../components/Navbar';
import styles from '../styles/App.module.css';
import { extractMetadata } from '../utils/api';

const Home = () => {
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
      setMessage({ type: 'error', text: error.message || 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <section className={styles.centeredContent}>
        <div className={styles.card}>
          <header className="text-center mb-4">
            <h1 className={styles.title}>FirstShot</h1>
            <p className={styles.subtitle}>Every shot has a story, we Reveal it!</p>
          </header>
          <FileUpload onFileUpload={handleFileUpload} />
          {loading && <LoadingSpinner />}
          {message && <Message type={message.type} text={message.text} />}
        </div>
      </section>
    </main>
  );
};

export default Home;
