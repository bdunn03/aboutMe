import React, { useState, useEffect } from "react";
import "./css/Home.css";
import rocketLeague from "../pictures/rocketLeague.jpg";
import Runescape from "../pictures/Runescape.jpg";
import golf from "../pictures/golf.JPG";
import Brooks from "../pictures/Brooks.jpg";
import kimmons from "../pictures/kimmons.jpg";
import school from "../pictures/school.jpg";
import basketball from "../pictures/basketball.jpg";
import fam from "../pictures/fam.jpg";

const images = [
  rocketLeague,
  Runescape,
  golf,
  Brooks,
  kimmons,
  school,
  fam,
  basketball,
];

export default function Home() {
  // Create a state variable to track the current image
  const [currentImage, setCurrentImage] = useState(0);

  // Create a function to update the current image to the next image in the array
  const updateImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  // Use the useEffect() hook to call the setInterval() method when the component is mounted
  useEffect(() => {
    const interval = setInterval(updateImage, 5000);

    // Return a cleanup function that clears the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div>
      <h1>Mr. Dunns Classroom 2022-2023</h1>
      <div className="pictures">
        {/* Use the currentImage state variable to display the current image in the slideshow */}
        <img
          className="gallery__img"
          src={images[currentImage]}
          alt="Gallery"
        />
      </div>
    </div>
  );
}
// // The first line import React, { useState, useEffect }
// from "react"; imports the React object and the useState and useEffect
// hooks from the react package. The React object is needed to create and
// render React components, and the useState and useEffect hooks are used to add state and
// lifecycle methods to functional components.

// // The second line import "./css/Home.css"; imports the Home.css stylesheet,
// which defines the styles for the component.

// // The next few lines import rocketLeague from "../pictures/rocketLeague.jpg";
// import the images that will be used in the slideshow.

// // The images array const images = [rocketLeague, Runescape, golf, Brooks,
// kimmons, school, fam, basketball]; contains the imported images.

// // The Home component is defined as a functional component using the function
// keyword and the () => syntax. It accepts no props and returns a <div> element
// that contains the heading and the slideshow.

// // The currentImage state variable const [currentImage, setCurrentImage]
// = useState(0); is created using the useState hook. It stores the index of the
// current image in the slideshow and provides a function setCurrentImage to update
//  its value. The initial value of currentImage is 0, which is the index of the first
//  image in the images array.

// // The updateImage function const updateImage = () => { setCurrentImage((currentImage + 1)
// % images.length); }; updates the currentImage state variable to the next image in the
// slideshow. It increments the current image index by 1 and uses the % operator to reset the
// index to 0 if it is greater than or equal to the length of the images array.

// // The useEffect hook useEffect(() => { const interval = setInterval(updateImage, 5000);
// return () => clearInterval(interval); }, [currentImage]); is used to call the setInterval
// method when the component is mounted, and to clean up the interval when the component is
// unmounted. The setInterval method calls the updateImage function every 5 seconds, which
// updates the currentImage state variable to the next image in the slideshow. The cleanup
// function returned by the useEffect hook uses the clearInterval method to stop the interval
// when the component is unmounted.

// // The return statement return ( <div> <h1>Mr. Dunns Classroom 2022-2023</h1>
// <div className="pictures"> <img className="gallery__img" src={images[currentImage]}
// alt="Gallery" /> </div> </div> ); returns a <div> element that contains the heading
// and the slideshow. The <h1> element contains the text "Mr. Dunns Classroom 2022-2023".
// The <div> element with the class name "pictures" contains the <img> element that displays
// the current image in the slideshow. The src attribute of the <img> element uses the
// currentImage state variable to determine which image to display. The alt attribute
// provides an alternative text description of the image.
