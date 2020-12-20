import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="container bg-dark w-25 h-25 mt-md-5">
      <div className="m-auto">
        <span className="text-white">Don't have an account?</span>
        <Link to="/register">
          <span>Sign up</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
