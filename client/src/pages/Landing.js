import React, { Component } from "react";
import API from "../utils/API.js";
import {Col, Row, Container} from "../components/Grid";
import Nav from "../components/Nav";
import OutlineBtn from "../components/DeleteBtn/index.js";
import Modal from "../components/Modal/index.js";
import logo from "../images/logo_2.png";
import { Input, TextArea, FormBtn } from "../components/Form";


import test from "../images/phone_pic.png";
import top from "../images/pizza_image.png";
import ("../pages/landing.css");



class Landing extends Component {

    state={
      users: [],
      username: "",
      email: "",
      password: "",
      bio:"",
      image:"",
      redirect:false
      
    }

    componentDidMount() {
      this.loadUsers();
    }
  
    loadUsers = () => {
      API.getUsers()
        .then(res =>
          this.setState({ users: res.data, username: "", email: "", password: ""})
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.bio && this.state.email) {
        API.saveUser({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          bio:this.state.bio,
          profile_image:this.state.image,
          timestamp:this.state.timestamp
          
        })
          .then(res => this.loadUsers())
          .catch(err => console.log(err));
      }
    };

    test = event => {
      const { name, value} = event.target;
    this.setState({
      [name]:value

    })    }

    
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
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"style={{marginLeft:1200}}>
      <form style={{padding:10}}>
      

  <div className="form-group">
    <label for="exampleInputPassword1">Username</label>
    <input value={this.state.bio}  onChange={this.test}
    name="bio" class="form-control" id="exampleInputPassword1" placeholder="Username"/>
  </div>
  <div className="form-group" >
  <label for="exampleInputPassword1">Password</label>
    <input 
     value={this.state.email} onChange={this.test}
     name="email" class="form-control" id="exampleInputPassword1" placeholder="Username"></input>


  </div>

  <div className="form-group">
  </div>
  <button  disabled={!(this.state.email && this.state.bio)}  onClick={this.handleFormSubmit}
  type="submit" className="btn btn-primary" style={{paddingLeft:10}}>Submit</button>
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
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
      <input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)">
                </input>      
              
              
              <input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              ></input> 
               <input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              ></input>

<FormBtn
                disabled={!(this.state.username && this.state.password&&this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
              </form>
    
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        
                
        <button type="button" className="btn btn-primary" onClick={this.test}>Save changes</button>
      </div>
    </div>
  </div>
</div>




                
                

            
            
            
            
           

           

            

           


            
           
            </Container>
        )
    }
    
}

export default Landing;
