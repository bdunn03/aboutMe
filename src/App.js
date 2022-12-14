import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Gaming from "./components/Gaming";
import Syllabus from "./components/Syllabus";
import Home from "./components/Home";
import Writing from "./components/Writing";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Gaming" element={<Gaming />}></Route>
          <Route path="/Syllabus" element={<Syllabus />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Writing" element={<Writing />}></Route>
          <Route path="/Form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
