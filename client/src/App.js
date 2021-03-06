import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Index";
import Navigation from "./Components/Navigation/Index";
import Login from "./Components/Login/index";
import Register from "./Components/Register/Index";
import Feeds from "./Components/Feed/Index";
import CreatePost from "./Components/Post/Create";
import Details from "./Components/Feed/Details";
import Profile from "./Components/Profile/Index";
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
        <Navigation />

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/feeds" component={Feeds} />
          <Route
            path="/myProfile"
            component={() => {
              return <Profile userId={token} isReadToken={true} />;
            }}
          />
          <Route
            path="/feed/:id"
            component={(props) => {
              return <Details id={props.match.params.id} />;
            }}
          ></Route>
          <Route
            path="/profile/:userId"
            component={(props) => {
              return (
                <Profile
                  userId={props.match.params.userId}
                  isReadToken={false}
                />
              );
            }}
          ></Route>
          <Route path="/createPost" component={CreatePost} />
          <Route path="/" component={Home} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
