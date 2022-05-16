import React from "react";
import "./css/Home.css";
import rocketLeague from "../pictures/rocketLeague.jpg";
import Runescape from "../pictures/Runescape.jpg";
import golf from "../pictures/golf.JPG";
import Brooks from "../pictures/Brooks.jpg";
import kimmons from "../pictures/kimmons.jpg";
import school from "../pictures/school.jpg";
import basketball from "../pictures/basketball.jpg";

export default function Home() {
  return (
    <div>
      <h1>Mr. Dunns Classroom 2022-2023</h1>
      <div className="pictures">
        <img
          className="pictures--item1 gallery__img"
          src={rocketLeague}
          alt="rocket league"
        />
        <img
          className="pictures--item2 gallery__img"
          src={Runescape}
          alt="Runescape"
        />
        <img
          className="pictures--item3 gallery__img"
          src={golf}
          alt="golfing"
        />
        <img
          className="pictures--item4 gallery__img"
          src={Brooks}
          alt="an image of Brooks"
        />
        <img
          className="picture--item5 gallery__img"
          src={kimmons}
          alt="kimmons logo"
        />
        <img
          className="picture--item6 gallery__img"
          src={school}
          alt="school"
        />
        <img
          className="picture--item7 gallery__img"
          src={basketball}
          alt="basketball"
        />
      </div>
    </div>
  );
}
