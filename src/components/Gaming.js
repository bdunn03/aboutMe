import React from "react";
import "./css/Gaming.css";
import rocketLeagueImage from "../pictures/rocketLeague.jpg";
import RunescapeImage from "../pictures/Runescape.jpg";

export default function Gaming() {
  return (
    <div className="scrollbar">
      <div>
        <img
          className="Gaming--pictures"
          src={rocketLeagueImage}
          alt="rocket league"
        />
        <img
          className="Gaming--pictures"
          src={RunescapeImage}
          alt="Runescape"
        />
      </div>
      <div className="Gaming">
        <h1 id="Gaming-page">Gaming</h1>
        <p>
          Currently I am into rocket league. I have also always played a game
          called RuneScape on and off. I used to be very big into call of duty
          when I was growing up.
        </p>
        <p>
          I have a gaming computer that I play games on&nbsp;
          <strong>whenver I have time.&nbsp;</strong>
          Most of the time I do not but I used to play alot.
        </p>
        <p>
          I also have a nitendo switch. I have all sorts of games on it
          inculuding a lot of the leggo games and animal crossing and some mario
          games as well
        </p>
      </div>
    </div>
  );
}
