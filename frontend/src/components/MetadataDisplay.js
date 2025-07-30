import React from 'react';
import { formatMetadata } from '../utils/helpers';

function MetadataDisplay({ metadata }) {
  if (!metadata || Object.keys(metadata).length === 0) {
    return <p>No metadata to display.</p>;
  }

  const formattedMetadata = formatMetadata(metadata);

  return (
    <div className="bg-white rounded shadow-sm p-3 mb-3" style={{maxHeight: '18rem', overflowY: 'auto'}}>
      <h3 className="h6 fw-bold text-dark mb-3">Metadata Details:</h3>
      <ul className="list-group list-group-flush small">
        {Object.entries(formattedMetadata).map(([key, value]) => (
          <li key={key} className="list-group-item bg-white border-0 px-0 py-1">
            <span className="fw-semibold text-secondary">{key}:</span> {JSON.stringify(value)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MetadataDisplay;