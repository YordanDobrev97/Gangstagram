import React from "react";
import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Login from "./Components/Login/index";
import Register from "./Components/Register/index";
import history from "./history";
import Footer from "./Components/Footer/index";
import Feeds from "./Components/Feed/index";
import Home from "./Components/Home/index";
import Profile from "./Components/Profile/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
