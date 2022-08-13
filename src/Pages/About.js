import React from "react";

import { useContext } from "react";
import MeetupList from "../Components/Meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

const About = () => {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>No Favorites</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favories} />;
  }

  return (
    <section>
      <h1>FAVORITES</h1>
      {content}
    </section>
  );
};

export default About;
