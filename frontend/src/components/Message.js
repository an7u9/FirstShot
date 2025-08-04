import React from 'react';
import styles from '../styles/Message.module.css';

function Message({ type, text }) {
  let typeClass = styles.info;
  if (type === 'success') typeClass = styles.success;
  else if (type === 'error') typeClass = styles.error;

  return (
    <div className={`${styles.message} ${typeClass}`} role="alert" aria-live="polite">
      <span>{text}</span>
    </div>
  );
}

export default Message;