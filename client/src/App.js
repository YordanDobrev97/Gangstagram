import React, { useState } from "react";

import Home from "./Components/Home/index";
import UserContext from "./UserContext";

import "./App.css";

import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

const cookies = new Cookies();

function App() {
  const token = cookies.get("userId");

  const userData = {
    username: null,
    isAuth: false,
  };

  if (token) {
    const decodeToken = jwt_decode(token);
    userData.username = decodeToken.username;
    userData.isAuth = true;
  }

  const [user, setUser] = useState(userData);
  return (
    <div className="App">
      <UserContext.Provider value={[userData, setUser]}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
