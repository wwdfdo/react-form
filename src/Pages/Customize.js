import React, { useState, useEffect } from "react";
import MeetupList from "../Components/Meetups/MeetupList";

function Customize() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadCards, SetLoadCards] = useState([]);

  useEffect(() => {
    fetch("https://react-form-e0b16-default-rtdb.firebaseio.com/formdata.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        SetLoadCards(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadCards} />
    </section>
  );
}

export default Customize;
