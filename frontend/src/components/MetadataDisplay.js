import React from 'react';
import { formatMetadata } from '../utils/helpers';
import styles from '../styles/MetadataDisplay.module.css';

function MetadataDisplay({ metadata }) {
  if (!metadata || Object.keys(metadata).length === 0) {
    return <p>No metadata to display.</p>;
  }

  const formattedMetadata = formatMetadata(metadata);

  return (
    <section className={styles.metadataContainer} aria-label="Metadata details">
      <h2 className={styles.metadataTitle}>Metadata Details:</h2>
      <ul className={styles.metadataList}>
        {Object.entries(formattedMetadata).map(([key, value]) => (
          <li key={key} className={styles.metadataItem}>
            <span className={styles.metadataKey}>{key}:</span> {JSON.stringify(value)}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MetadataDisplay;