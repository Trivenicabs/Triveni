'use client';

import React from 'react';
import Modal from './Modal';



const SuccessModal = ({ isOpen, onClose, onReset }) => {
  const handleClose = () => {
    onClose();
    onReset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center py-6">
        <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-4">
          Your booking has been confirmed. Our team will contact you shortly with further details.
        </p>
        <button
          onClick={handleClose}
          className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SuccessModal;