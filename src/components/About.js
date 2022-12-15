import React from "react";
import "./css/About.css";
import image from "../pictures/family.jpg";
import Brooks from "../pictures/Brooks.jpg";
import golf from "../pictures/golf.JPG";
import dog from "../pictures/dog.jpg";

export default function About() {
  return (
    <div>
      <div className="float--50">
        <h1 className="About">About me </h1>
        <ul className="about--list">
          <p>
            Welcome to my personal website! My name is Brett Dunn and I am a
            teacher. On this website, you will find information about my
            professional life, including my syllabus and a form for students to
            fill out. In addition to my professional life, you will also find
            information about my personal life. I have a gaming computer and I
            enjoy playing games in my free time. I also have a son with another
            one on the way and a loving wife. Thank you for visiting my website.
            I hope you find the information you are looking for and please feel
            free to contact me if you have any questions.
          </p>
          Sincerely, Brett Dunn
          <p></p>
        </ul>
      </div>
      <div className="float--50">
        <img className="image2" src={Brooks} alt="Brooks" />
        <img className="image3" src={golf} alt="golfing" />
        <img className="image4" src={dog} alt=" Brooks" />
        <img className="image" src={image} alt="yeah" />
      </div>
    </div>
  );
}
