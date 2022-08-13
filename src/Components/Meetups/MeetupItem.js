import React, { useContext } from "react";
import Card from "../Ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const { image, title, address, description } = props;

  const favoriteCtx = useContext(FavoritesContext);

  const itemisFavorite = favoriteCtx.itemisFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemisFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }

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
          <button onClick={toggleFavoriteStatusHandler}>
            {itemisFavorite ? "Remove From Favorite" : "Add To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
