import React from "react";
import {Col, Row, Container} from "../Grid";
import SignUpBtn from "../DeleteBtn/index.js";
import logo from "../../images/logo_2.png";
import ("../../components/Nav/style.css");

function Nav({props,children}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fluid"{...props}>
    
      
      {children}
    </nav>
  );
}



export function NavMain() {
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
   
  )
}

export function NavMember(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fluid">
    <Col size="md">
      <a className="navbar-brand" href="/">
      
      <img src={logo} alt="logo"/>
      </a>
      </Col >
      <Col size="md"></Col>
      <Col size="offset-md">
      <button type="button" class="btn btn-outline-light" style={{alignSelf:"left"}}><i class="fas fa-home"></i></button>
      <button type="button" class="btn btn-outline-light" style={{marginRight:10}}><i className="fas fa-sign-in-alt"></i></button>

      </Col>
    </nav>
  );

}

export default Nav;