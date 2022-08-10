import React from "react";

const Modal = ({ handleCancel }) => {
  return (
    <div className="modal">
      <p>Are you sure ?</p>
      <button className="btn btn--alt" onClick={handleCancel}>
        cancel
      </button>
      <button className="btn">confirm</button>
    </div>
  );
};

export default Modal;
