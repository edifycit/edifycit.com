import React from 'react';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="news-modal-col-1-row-69">
      <div className="news-modal-content">
        <button className="close-button-model-main-news" style={{color:"red"}} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
      <div className="news-overlay" onClick={onClose} />
    </div>
  );
};

export default Modal;