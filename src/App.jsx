import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Proyects.jsx";
import Experience from "./pages/Experience.jsx";

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Route exact path="/" render={() => <Projects />} />
      <Route exact path="/about" render={() => <Experience />} />
      {/* </Layout> */}
    </Router>
  );
};

export default App;
