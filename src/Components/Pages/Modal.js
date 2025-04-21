import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Website Under Development</h2>
        <p className="text-gray-700 mb-4">
          This website is still under development. Some features may not work properly across all devices.
          For the best experience, we recommend using a desktop or laptop computer. Please report any issues or bugs to us.
        </p>
        <button 
          onClick={closeModal} 
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Close
        </button>
        <div className="mt-4">
          <a 
            href="mailto:vasoya421@gmail.com" 
            className="text-blue-600 hover:underline"
          >
            Report a Bug
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
