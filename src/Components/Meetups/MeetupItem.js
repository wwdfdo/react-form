import React from "react";
import Card from "../Ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const { image, title, address, description } = props;
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
