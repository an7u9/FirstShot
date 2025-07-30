import React from 'react';

function Message({ type, text }) {
  let alertClass = '';
  switch (type) {
    case 'success':
      alertClass = 'alert alert-success';
      break;
    case 'error':
      alertClass = 'alert alert-danger';
      break;
    case 'info':
      alertClass = 'alert alert-info';
      break;
    default:
      alertClass = 'alert alert-secondary';
      break;
  }

  return (
    <div className={`${alertClass} mt-4`} role="alert">
      <p className="mb-0">{text}</p>
    </div>
  );
}

export default Message;