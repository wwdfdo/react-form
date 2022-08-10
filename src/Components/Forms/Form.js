import React from "react";

import { useRef } from "react";
import classes from "./Form.module.css";
import Card from "../Ui/Card";

const Form = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const titleValue = titleInputRef.current.value;
    const imageValue = imageInputRef.current.value;
    const addressValue = addressInputRef.current.value;
    const descriptionValue = descriptionInputRef.current.value;

    const enteredDate = {
      title: titleValue,
      image: imageValue,
      address: addressValue,
      description: descriptionValue,
    };

    props.onFormData(enteredDate);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
