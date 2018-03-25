import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
// import Footer from "./Components/Footer";
// import Skills from "./Components/Skills";
// import "./Views/index.css";

const App = () => (
  <div className="app-container">


    <div className="routes">
      <Route exact path="/" component={Home}/>
      {/* <Route path="/about" component={About}/> */}
      {/* <Route path="/skills" component={Skills}/> */}
    </div>
  </div>
);

render(
  <BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById("root"));