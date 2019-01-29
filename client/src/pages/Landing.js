import React, { Component } from "react";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import Nav from "../components/Nav";
import OutlineBtn from "../components/DeleteBtn/index.js";
import Modal from "../components/Modal/index.js";
import logo from "../images/logo_2.png";

import test from "../images/phone_pic.png";
import top from "../images/pizza_image.png";
import ("../pages/landing.css");



class Landing extends Component {

    state={
        users:{},
        username:"",
        password:"",
        show:false
    }

    componentDidMount(){
        this.loadLanding();
    }

    loadLanding = () => {
        API.getUsers()
          .then(res =>
            this.setState({ users: res.data, username:"", password:""})
          )
          .catch(err => console.log(err));
      };

      showModal = () => {
        this.setState({ show:true });
      };


      hideModal = () => {
        this.setState({ show:false });
      };

      work =() =>{
          return(
              <Modal/>
          )
      }
      

     render(){
        return(
            <Container>
                
                <Nav>
                <Col size="md">
     
                <a className="navbar-brand" href="/">
                <img src={logo} alt="logo"/> 
                </a>
     
      
     </Col >
     <Col size="md"></Col>
      <Col size="offset-md">
      <OutlineBtn style={{marginRight:10}}  id="dropdownMenuButton" data-toggle="dropdown">Log-In<i className="fas fa-sign-in-alt"></i></OutlineBtn>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
      </Col>
                
                    <OutlineBtn style={{alignSelf:"left"}} data-toggle="modal" data-target="#exampleModalCenter">Sign-Up <i class="fas fa-camera-retro"></i></OutlineBtn>
                    </Nav>
                
                <div className="landing-head">
                
        
                </div>
               

                <div className="hero-text" style={{marginTop:70, zIndex:5}}>

<h1>A picture <br>
</br>is worth a thousand <br></br>words...</h1>





</div>
<div className= "modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
  <div className="modal-dialog modal-dialog-centered" role="document" >
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle" >Sign-Up</h5>
        <p>Please fill in this form to create an account.</p>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body" style={{}}>
      <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
    
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    
        <label>
          <input type="checkbox" checked="checked" name="remember" style={{marginBottom:15}}/> Remember me
        </label>
    
        <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




                
                

            
            
            
            
           

           

            

           


            
           
            </Container>
        )
    }
    
}

export default Landing;
