import React from 'react';

const Notification = ({ message, type }) => {
  const alertType = type === 'success' ? 'alert-success' : 'alert-danger';
  return (
    <div className={`alert ${alertType}`} role="alert">
      {message}
    </div>
  );
};

export default Notification;
