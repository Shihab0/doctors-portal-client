import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  handleDeleteDoctor,
  modalData,
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              htmlFor="confirmation-modal"
              onClick={() => handleDeleteDoctor(modalData._id)}
              className="btn hover:bg-red-700 bg-red-600"
            >
              ok
            </label>
            <label
              htmlFor="confirmation-modal"
              onClick={closeModal}
              className="btn"
            >
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
