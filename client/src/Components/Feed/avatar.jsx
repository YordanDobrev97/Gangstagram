import React from "react";
import "./style.css";

function Avatar() {
  return (
    <header className="w-25 ml-md-2">
      <img
        src="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png"
        className="w-25 img-fluid mt-md-2"
      />
      <div>
        <span class="text-dark mr-lg-5">Username</span>
      </div>
    </header>
  );
}

export default Avatar;
