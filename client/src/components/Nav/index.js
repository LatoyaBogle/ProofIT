import React from "react";
import logo from "../../images/logo_2.png";
import ("../../components/Nav/style.css");

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
      <img src={logo} alt="logo"/>
      A picture is worth a thousand words...
      </a>
    </nav>
  );
}



export function Navie() {
  return (
    <div className="navbar">
      <a href=""> A picture is worth a thousand words...</a>
      <a href="">Sign IN</a>
    </div>
  )
}
export default Nav;