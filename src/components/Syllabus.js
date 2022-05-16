import React from "react";
import "./css/Syllabus.css";

export default function Syllabus() {
  return (
    <div className="grid-container">
      <h1 className="name">Mr. Dunns Syllabus</h1>
      <h2 className="grid-item">Expectations</h2>
      <div>
        <h2 className="expectations--header">You are expected</h2>
        <p className="expectations">
          <li>
            to contribute to class and work cooperatively whenever the situation
            requires.
          </li>
          <li>to come to class prepared and to participate in class. </li>
          <li>
            to not to talk while I am speaking or interrupt while other people
            are speaking.
          </li>
          <li>
            to follow all directions, rules, and guidelines at all times in
            class and accept the consequences when you choose to make poor
            decisions
          </li>
          <li>to take risks and learn from mistakes you might make.</li>
          <li>to be responsible for ALL missing work!</li>
          <li>Keep your computer closed during class instruction</li>
        </p>
      </div>
      <div>
        <h1 className="grid-item">Classroom Rules</h1>
        <h2 className="expectations--header">Classroom Rules</h2>
        <p className="expectations">
          <li>Be prepared with materials and assignments on time.</li>
          <li>
            Be respectful to: yourself, your classmates, teacher, and your area{" "}
            {"(meaning pickup after yourself)"}{" "}
          </li>
          <li>Be ready to learn</li>
          <li>DO RIGHT {"Just do the right thing. - Lour Holtz"}</li>
          <li>You will be given 3 bathroom passes per quarter (9 weeks)</li>
          <li>NO phones out during class (zero tolerance)</li>
        </p>
      </div>
      <div>
        <h1 className="grid-item">Consequences</h1>
        <h2 className="expectations--header">Consequences</h2>
        <p className="expectations">
          <li>Warning (Verbal or Written)</li>
          <li>Conference after school.</li>
          <li>Parent Contact</li>
          <li>
            After school detention {"Just do the right thing. - Lour Holtz"}
          </li>
          <li>Office Referal</li>
        </p>
      </div>
      <div>
        <h1 className="grid-item">Classroom Procedures</h1>
        <h2 className="expectations--header">Classroom Procedures</h2>
        <p className="expectations">
          <li>
            Be in your seat working on bell work before the tardy bell rings
          </li>
          <li>During announcements you will sit quietly and listen</li>
          <li>
            Make sure to take care of sharpening your pencil before class. If
            you need a pencil ask me before class starts.
          </li>
          <li>
            When needing help on problems during class time, before immediately
            asking for help, ask your classmate to your left and right first for
            help. Lots of learning can be done this way.
          </li>
          <li>Work until the end of class</li>
        </p>
      </div>
    </div>
  );
}
