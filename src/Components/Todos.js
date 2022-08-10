import React from "react";
import { useState } from "react";
import BackDrop from "./BackDrop";
import Modal from "./Modal";

const Todos = ({ text }) => {
  let [isModelOpen, setIsModelOpen] = useState(false);

  const handleDelete = () => {
    setIsModelOpen(true);
    console.log(setIsModelOpen);
  };

  const handleCancel = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {isModelOpen && <Modal handleCancel={handleCancel} />}
      {isModelOpen && <BackDrop handleCancel={handleCancel} />}
    </>
  );
};

export default Todos;
