import React from "react"; // Import the React library
import "./css/Navbar.css"; // Import a stylesheet for the Navbar component
import kimmons from "../pictures/kimmons.jpg"; // Import the logo image for the Navbar
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom for navigation
import { Dropdown } from "react-bootstrap"; // Import the Dropdown component from react-bootstrap
import { useState } from "react"; // Import the useState hook from React for state management
import { useRef } from "react"; // Import the useRef hook from React for creating refs

// Define the Navbar component
export default function Navbar() {
  // Define the state variable showMenu and a state setter function setShowMenu using the useState hook
  const [showMenu, setShowMenu] = useState(false);

  // Create a ref for the dropdown menu using the useRef hook
  const dropdownRef = useRef(null);

  // Return the JSX that represents the Navbar component
  return (
    <nav>
      {/* Add the logo image */}
      <img className="navbar--logo " src={kimmons} alt="kimmons logo" />

      {/* Add the Dropdown component */}
      <div>
        <Dropdown className="custom-dropdown" ref={dropdownRef}>
          {/* Add the dropdown toggle */}
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            // When the user hovers over the dropdown toggle, show the menu
            onMouseEnter={() => setShowMenu(true)}
            // When the user moves the cursor away from the dropdown, hide the menu unless the cursor is still within the dropdown menu
            onMouseLeave={(event) => {
              if (!dropdownRef.current.contains(event.relatedTarget)) {
                setShowMenu(false);
              }
            }}
          >
            Navigate
          </Dropdown.Toggle>

          {/* Add the dropdown menu */}
          <Dropdown.Menu show={showMenu} key={showMenu}>
            {/* Add individual items to the dropdown menu */}
            <Dropdown.Item href="/Home">Home</Dropdown.Item>
            <Dropdown.Item href="/About">About</Dropdown.Item>
            <Dropdown.Item href="/Gaming">Gaming</Dropdown.Item>
            <Dropdown.Item href="/Syllabus">Syllabus</Dropdown.Item>
            <Dropdown.Item href="/Writing">Writing</Dropdown.Item>
            <Dropdown.Item href="/Form">Form</Dropdown.Item>
            <Dropdown.Item href="/Tick">Tick Tac Toe</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

// import React from "react";
// import "./css/Navbar.css";
// import { Link } from "react-router-dom";
// import kimmons from "../pictures/kimmons.jpg";
// // import Login from "./Login";

// export default function Navbar() {
//   return (
//     <nav>
//       <img className="navbar--logo " src={kimmons} alt="kimmons logo" />
//       <Link to="/Home" className="nav--text">
//         Home
//       </Link>
//       {/* <Login className="nav--right" /> */}
//       <Link to="/About" className="nav--right">
//         About
//       </Link>
//       <Link to="/Gaming" className="nav--right">
//         Gaming
//       </Link>
//       <Link to="/Syllabus" className="nav--right">
//         Syllabus
//       </Link>
//       <Link to="/Writing" className="nav--right">
//         Writing
//       </Link>
//       <div className="form-page">
//         <Link to="/Form" className="nav--right">
//           Form
//         </Link>
//       </div>
//     </nav>
//   );
// }
