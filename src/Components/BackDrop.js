import React from "react";

const BackDrop = ({ handleCancel }) => {
  return <div className="backdrop" onClick={handleCancel} />;
};

export default BackDrop;
