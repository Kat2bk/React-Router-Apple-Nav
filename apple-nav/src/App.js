import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavWrapper from "./components/navWrapper";
import { Route } from "react-router-dom";
import Ipad from "./ipad";

function App() {
  return (
    <div className="App">
      <NavWrapper />
      <Route path="/ipad" component={Ipad} />
      <Route path="/iphone" />
    </div>
  );
}

export default App;
