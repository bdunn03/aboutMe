import React, { useState } from "react";
import "./css/Writing.css";

export default function Blanks() {
  const [blanks, setBlanks] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [show, setShow] = useState(false);

  const handleChange = (event, index) => {
    var newBlanks = [...blanks];
    newBlanks[index] = event.target.value;
    setBlanks(newBlanks);
  };

  return (
    <div>
      <label className="inputs">
        adjective:
        <input
          className="inputs--text"
          value={blanks[0]}
          onChange={(event) => handleChange(event, 0)}
        />
      </label>
      <br />
      <label className="inputs">
        adjective:
        <input
          className="inputs--text"
          value={blanks[1]}
          onChange={(event) => handleChange(event, 1)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        type of bird:
        <input
          className="inputs--text"
          value={blanks[2]}
          onChange={(event) => handleChange(event, 2)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        room in a house:
        <input
          className="inputs--text"
          value={blanks[3]}
          onChange={(event) => handleChange(event, 3)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        verb(past tense)
        <input
          className="inputs--text"
          value={blanks[4]}
          onChange={(event) => handleChange(event, 4)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        verb:
        <input
          className="inputs--text"
          value={blanks[5]}
          onChange={(event) => handleChange(event, 5)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        relative's name:
        <input
          className="inputs--text"
          value={blanks[6]}
          onChange={(event) => handleChange(event, 6)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        noun:
        <input
          className="inputs--text"
          value={blanks[7]}
          onChange={(event) => handleChange(event, 7)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        a liquid:
        <input
          className="inputs--text"
          value={blanks[8]}
          onChange={(event) => handleChange(event, 8)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        verb ending in -ing:
        <input
          className="inputs--text"
          value={blanks[9]}
          onChange={(event) => handleChange(event, 9)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        part of the body (plural):
        <input
          className="inputs--text"
          value={blanks[10]}
          onChange={(event) => handleChange(event, 10)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        plural noun:
        <input
          className="inputs--text"
          value={blanks[11]}
          onChange={(event) => handleChange(event, 11)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        verb ending in -ing:
        <input
          className="inputs--text"
          value={blanks[12]}
          onChange={(event) => handleChange(event, 12)}
        ></input>
      </label>
      <br />
      <label className="inputs">
        noun:
        <input
          className="inputs--text"
          value={blanks[13]}
          onChange={(event) => handleChange(event, 13)}
        ></input>
      </label>

      <button className="button" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <p className="text">
          It was a{" "}
          <span style={{ color: "red" }}>{blanks[0] || "_________"}</span>{" "}
          November day, I woke up to the{" "}
          <span style={{ color: "red" }}>{blanks[1] || "_________"}</span> smell
          of <span style={{ color: "red" }}>{blanks[2] || "_________"}</span>{" "}
          roasting in the{" "}
          <span style={{ color: "red" }}>{blanks[3] || "_________"}</span>{" "}
          downstairs. I{" "}
          <span style={{ color: "red" }}>{blanks[4] || "_________"}</span> down
          the stairs to see if I could help{" "}
          <span style={{ color: "red" }}>{blanks[5] || "_________"}</span> the
          dinner. My mom said, "See if{" "}
          <span style={{ color: "red" }}>{blanks[6] || "_________"}</span> needs
          a fresh{" "}
          <span style={{ color: "red" }}>{blanks[7] || "_________"}</span> ." So
          I carried a tray of glasses full of{" "}
          <span style={{ color: "red" }}>{blanks[8] || "_________"}</span> into
          the <span style={{ color: "red" }}>{blanks[9] || "_________"}</span>{" "}
          room. When I got there, I couldn't believe my{" "}
          <span style={{ color: "red" }}>{blanks[10] || "_________"}</span>!
          There were{" "}
          <span style={{ color: "red" }}>{blanks[11] || "_________"}</span>{" "}
          <span style={{ color: "red" }}>{blanks[12] || "_________"}</span> on
          the <span style={{ color: "red" }}>{blanks[13] || "_________"}</span>!
        </p>
      )}
    </div>
  );
}
