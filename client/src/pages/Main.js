import React, { Component } from "react";
import perfume from "../images/image_perfume.png";
import test from"../images/image_one.png";
import pepper from"../images/image_three.png";
import shoes from"../images/image_four.png";
import computer from "../images/image_five.png";
import notsure from "../images/image_one.png";
import pizza from "../images/image_six.png";
import Header from "../components/Header/index.js";
import {Col, Row, Container} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import OutlineBtn from "../components/DeleteBtn/index.js";

import Nav from "../components/Nav";


import ("../pages/main.css");




class Main extends Component {
    render(){
        return(
            
            <Container>
               <Nav/>
               <div style={{marginLeft:200}}>
               <Jumbotron ><h1 className="display-4">Top Reviews from your Area</h1>
                    <p className="lead">Who has the highest rating</p>
                    <hr className="my-4"></hr>
  <p></p>
  <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
      <OutlineBtn data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Show Reviews</OutlineBtn>
      
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
                    </div>        

            <div className="bg-image">
            

            <div className="bg-image img1"><img src={perfume} alt="perfume" style={{height:500, width:1500, borderBottom:"white solid"}}/></div>
            
<div className="bg-image img2"><img src={pepper} alt="pepper" style={{height:500, width:1500, borderBottom:"white solid"}}/></div>

<div className="bg-image img5"><img src={notsure} alt="bullshit"style={{height:500, width:1500, borderBottom:"white solid"}}/></div>

<div className="bg-image img3"><img src={shoes} alt="shoes"style={{height:500, width:1500, borderBottom:"white solid"}}/></div>
<div className="bg-image img4"><img src={computer} alt="computer"style={{height:500, width:1500,borderBottom:"white solid"}}/></div>
<div className="bg-image img6"><img src={pizza} alt="bullshit"style={{height:500, width:1500}}/></div>
         


</div>
            
            </Container>
        )
    }
}

export default Main;
