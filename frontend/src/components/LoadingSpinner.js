import React from 'react';
import styles from '../styles/LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.spinnerContainer} role="status" aria-live="polite">
      <div className="spinner-border" style={{width: '2rem', height: '2rem'}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className={styles.spinnerText}>Loading...</span>
    </div>
  );
}

export default LoadingSpinner;