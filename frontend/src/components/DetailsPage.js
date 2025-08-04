import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MetadataDisplay from './MetadataDisplay';
import Preview from './Preview';
import Navbar from './Navbar';
import styles from '../styles/DetailsPage.module.css';

function DetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { metadata, fileName, file } = location.state || {};

  if (!metadata) {
    return (
      <div className={styles.detailsContainer}>
        <Navbar />
        <section className={styles.centeredContent}>
          <div className="alert alert-warning text-center">No metadata to display. Please go back and upload a file.</div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.detailsContainer}>
      <Navbar />
      <section className={styles.centeredContent}>
        <div className="row w-100 justify-content-center align-items-stretch" style={{maxWidth: '900px'}}>
          <div className="col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0">
            <Preview file={file} />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className={styles.detailsCard}>
              <h1 className={styles.detailsTitle}>Metadata Details for {fileName}</h1>
              <MetadataDisplay metadata={metadata} />
              <button
                onClick={() => navigate('/')}
                className={`btn btn-primary ${styles.revealBtn}`}
              >
                Reveal another Shot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailsPage;