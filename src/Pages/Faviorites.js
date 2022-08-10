import React from "react";
import Form from "../Components/Forms/Form";
import { useNavigate } from "react-router-dom";

const Faviorites = () => {
  const history = useNavigate();

  const onFormDataHandler = (enteredDate) => {
    fetch(
      "https://react-form-e0b16-default-rtdb.firebaseio.com/formdata.json",
      {
        method: "POST",
        body: JSON.stringify(enteredDate),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history("/");
    });
  };

  return (
    <section>
      <h1>ADD FAVORITES</h1>
      <Form onFormData={onFormDataHandler} />
    </section>
  );
};

export default Faviorites;
