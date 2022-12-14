import React from "react";
import "./css/Form.css";
import "./css/Navbar.css";

export default function MyForm() {
  const inputArray = [];
  function handleSubmit(event) {
    event.preventDefault();
    const {
      name,
      school,
      grade,
      food,
      birthday,
      hobbies,
      subject,
    } = event.target;

    inputArray.push({ name: "Name", value: name.value });
    inputArray.push({ school: "School", value: school.value });
    inputArray.push({ grade: "grade", value: grade.value });
    inputArray.push({ food: "favorite food", value: food.value });
    inputArray.push({ birthday: "birthday", value: birthday.value });
    inputArray.push({ hobbies: "hobbies", value: hobbies.value });
    inputArray.push({ subject: "favorite subject", value: subject.value });
    console.log(inputArray);
  }
  return (
    <body class="my-form-background">
      <h1>Complete the Form Below</h1>
      <form className="my--form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Ex. Brett Dunn"
            name="name"
            required
          />
        </label>
        <label>
          School:
          <input type="text" placeholder="Ex. Kimmons" name="school" required />
        </label>
        <label>
          Grade:
          <input
            type="text"
            placeholder="Ex. 6th Grade"
            name="grade"
            required
          />
        </label>
        <label>
          Favorite Food:
          <input type="text" placeholder="Ex. Chicken" name="food" required />
        </label>
        <label>
          Birthday:
          <input
            type="date"
            placeholder="Ex. 02/26/1997"
            name="birthday"
            require
          />
        </label>
        <label>
          Hobbies:
          <input
            type="text"
            placeholder="Ex. Tennis, Basketball, Watching sports"
            name="hobbies"
            required
          />
        </label>
        <label>
          Favorite Subject:
          <input type="text" placeholder="Ex. Math" name="subject" required />
        </label>
        <input type="submit" value="Submit Form" required />
      </form>
    </body>
  );
}
//   const inputValues = [];

// inputValues["Name:"] = { name: name.value };
// inputValues["school:"] = { name: school.value };
// inputValues["grade:"] = { name: grade.value };
// inputValues["food:"] = { name: food.value };
// inputValues["birthday:"] = { name: birthday.value };
// inputValues["hobbies:"] = { name: hobbies.value };
// inputValues["subject:"] = { name: subject.value };
// console.log(inputValues);
