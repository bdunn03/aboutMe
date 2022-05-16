import React from "react";
import "./css/Gaming.css";
import rocketLeague from "../pictures/rocketLeague.jpg";
import Runescape from "../pictures/Runescape.jpg";

export default function Gaming() {
  return (
    <div className="scrollbar">
      <div>
        <img
          className="Gaming--pictures"
          src={rocketLeague}
          alt="rocket league"
        />
        <img className="Gaming--pictures" src={Runescape} alt="Runescape" />
      </div>
      <div className="Gaming">
        <h1>Gaming</h1>
        <p>
          Currently I am into rocket league. I have also always played a game
          called RuneScape on and off. I used to be very big into call of duty
          when I was growing up.
        </p>
        <strong>
          I have a gaming computer that I play games on whenever I have time.
          most of the time I do not but I used to play alot.
        </strong>
        <p>
          I also have a nitendo switch. I have all sorts of games on it
          inculuding a lot of the leggo games and animal crossing and some mario
          games as well
        </p>
      </div>
    </div>
  );
}
