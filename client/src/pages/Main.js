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


import ("../pages/main.css");




class Main extends Component {
    render(){
        return(
            
            <Container>
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
