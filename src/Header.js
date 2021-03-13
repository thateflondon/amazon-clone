import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://www.amazon.fr/ref=nav_logo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Logo*/}
      </div>

      <div class="header__nav"></div>
    </div>
  );
}

export default Header;
