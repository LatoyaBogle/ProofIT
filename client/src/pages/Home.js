import React, { Component } from "react";
import {Col, Row, Container} from "../components/Grid";
import Nav from "../components/Nav";
import test from "../images/image_seven.png";
import ("../pages/home.css");



class Home extends Component {
    render(){
        return(
            <Container>
               
                <div className="test">
                
                    <Row>
                        <Col size="md">
                        <Nav/>
                        <img src={test} style={{opacity:"0.7", width:1500, marginTop:100, borderTop:"solid white 10px"}} alt="strawberries"/>
                        </Col>
                    </Row>

                </div>
                <Row>
                    <Col size="md"></Col>
                    <Col size="md"></Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
