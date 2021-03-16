import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Link to="/" />
    <Link to="/login" />
    <Link to="/register" />
    <Link to="/feeds" />
    <Link to="/feed/:id" />
    <Link to="/profile/:id" />
    <Link to="/createPost" />
    <Link to="/myProfile" />
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
