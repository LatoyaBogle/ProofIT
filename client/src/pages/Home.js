import React, { Component } from "react";
import {Col, Row, Container} from "../components/Grid";
import Nav from "../components/Nav";
import OutlineBtn from "../components/DeleteBtn/index.js";
import Footer from "../components/Footer/index.js";
import logo from "../images/logo_2.png";
import strawberry from "../images/strawberry.png";
import Jumbotron from "../components/Jumbotron";
import ("../pages/home.css");



class Home extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Nav style={{height:100,width:1500}}>
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo"/> 
                        </a>
                        <Col size="sm md lg xl"></Col>
                        <Col size="sm md lg xl"></Col>
                        <Col size="sm md lg xl"></Col>
                        <Col size="sm md lg xl"></Col>
                        <Col size="sm md lg xl">
                            <OutlineBtn id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginRight:10}}>
                                Account
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" href="#">Profile</button>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                            </OutlineBtn>


                            <OutlineBtn style={{alignSelf:"right"}}>
                                <i className="fas fa-sign-in-alt">Log-Out</i>
                            </OutlineBtn>
                            <OutlineBtn className="dropdown-item "  data-toggle="modal" data-target="#exampleModalCenter">Submit Your Review </OutlineBtn>

                        </Col>
                    </Nav>
                </Row>
                <Row>
                    
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
                                <h2>Star Rating</h2>
                                <input type="text" class="form-control" placeholder="Location" aria-label="Username" aria-describedby="basic-addon1"/>
                                <input type="text" class="form-control" placeholder="Whatever" aria-label="Username" aria-describedby="basic-addon1"/>

<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
<div class="input-group mb-3">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile02"/>
    <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
  </div>
  <div class="input-group-append">
    <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
  </div>
</div>
        <form className="dropdown-item">
        <div className="form-row align-items-center">
        <div className="col-auto my-1">
        <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    </div>
    </form>
      </div>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
  </div>
  </div>

                        
                        </Row>
                <Row >
                    <div className="highest-rated jumbotron-fluid">{/**formerly test  */}
                    <Jumbotron ><h1 className="display-4">Highest Rated Reviews in your Area</h1>
                    <p className="lead"></p>
                    <hr className="my-4"></hr>
  <p></p>
  <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
      <OutlineBtn data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:"red"}}>Show Reviews</OutlineBtn>
      
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <Row>
        <Col size="md">Picture</Col><Col size="md">Name</Col><Col size="md">Category</Col><Col size="md">Rating</Col>
        </Row>
      </div>
    </div>
  </div>
  </div>
  
                    </Jumbotron>
                        
                        <img src={strawberry} alt="strawberry fluid" style={{opacity:"0.7", width:1485, marginTop:100, height:900}}/>
                        </div>
                    </Row>
                <Footer/>    
            </Container>
        )
    }
}

export default Home;
