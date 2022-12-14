import React from "react";
import { useState } from "react";
import "./css/Home.css";
import rocketLeague from "../pictures/rocketLeague.jpg";
import Runescape from "../pictures/Runescape.jpg";
import golf from "../pictures/golf.JPG";
import Brooks from "../pictures/Brooks.jpg";
import kimmons from "../pictures/kimmons.jpg";
import school from "../pictures/school.jpg";
import basketball from "../pictures/basketball.jpg";
import fam from "../pictures/fam.jpg";

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
        <img className="picture--item7 gallery__img" src={fam} alt="family" />
        <img
          className="picture--item8 gallery__img"
          src={basketball}
          alt="basketball"
        />
      </div>
    </div>
  );
  // function useLoginButton() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   function handleLoginClick() {
  //     setIsLoggedIn(true);
  //   }

  //   function handleLogoutClick() {
  //     setIsLoggedIn(false);
  //   }

  //   return {
  //     isLoggedIn,
  //     onLoginClick: handleLoginClick,
  //     onLogoutClick: handleLogoutClick,
  //   };
  // }

  // function LoginButton() {
  //   const { isLoggedIn, onLoginClick, onLogoutClick } = useLoginButton();

  //   if (isLoggedIn) {
  //     return <button onClick={onLogoutClick}>Logout</button>;
  //   } else {
  //     return <button onClick={onLoginClick}>Login</button>;
  //   }
  // }
}
