import React, { useContext } from "react";
import Card from "../Ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const MeetupItem = (props) => {
  const { image, title, address, description } = props;

  const history = useNavigate();

  const favoriteCtx = useContext(FavoritesContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

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

  function deleteHandler(id) {
    fetch(
      `https://react-form-e0b16-default-rtdb.firebaseio.com/formdata/${id}.json`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history(0);
    });
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

        {isLoggedIn && (
          <div className={classes.actions}>
            <button onClick={() => deleteHandler(props.id)}>Delete</button>
          </div>
        )}
      </Card>
    </li>
  );
};

export default MeetupItem;
