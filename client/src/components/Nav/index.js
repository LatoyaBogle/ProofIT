import React from "react";
import {Col, Row, Container} from "../Grid";
import logo from "../../images/logo_2.png";
import ("../../components/Nav/style.css");

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <Col size="md">
      <a className="navbar-brand" href="/">
      
      <img src={logo} alt="logo"/>
      </a>
      </Col >
      <Col size="md"></Col>
      <Col size="offset-md">
      <button type="button" class="btn btn-outline-light" style={{marginRight:10}}>Log-In</button>
      <button type="button" class="btn btn-outline-light" style={{alignSelf:"left"}}>Sign-Up</button>

      </Col>
    </nav>
  );
}



/*export function Navie() {
  return (
    <div className="navbar">
    
      <a href=""> A picture is worth a thousand words...</a>
      <a href="">Sign IN</a>
      </div>
     

      </div>
   
  )
}*/
export default Nav;