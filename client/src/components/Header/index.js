import React from "react";
import test from "../../images/image_perfume.png";
import ("../Header/header.css");


function Header(){
    return(
        <div class="header" >
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
    )
}

export default Header;