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
          <li>Graduated from Uafs with a bachelors in Mathematics</li>
          <li>Teacher at kimmons Middle school</li>
          <li>I like playing golf </li>
          <li>Has a son that is a litle over 2 months old</li>
          <li>I have two dogs that I enjoy spending time with</li>
          <li>Enjoys learning how to develop a website</li>
        </ul>
      </div>
      <div className="float--50">
        <img className="image2" src={Brooks} alt="an image of Brooks" />
        <img className="image3" src={golf} alt="golfing" />
        <img className="image4" src={dog} alt="an image of Brooks" />
        <img className="image" src={image} alt="an image" />
      </div>
    </div>
  );
}
