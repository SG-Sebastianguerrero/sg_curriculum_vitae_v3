import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
/* import Projects from "./pages/Projects"; */
import Home from "./pages/Home";

import Hero from "./components/Hero";

import Experience from "./pages/Experience";
import TestFalcon from "./components/testFalcon";
export default function App() {
  return (
    <Router>
      {/* Navbar
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

      </div> */}
      <Routes>
        <Route path="/projects" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Hero />} /> {/* <Home /> */}
        <Route path="/falcon" element={<TestFalcon />} /> {/* <Home /> */}
      </Routes>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
