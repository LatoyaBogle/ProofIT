import React, { Component } from "react";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import Nav from "../components/Nav";

import test from "../images/phone_pic.png";
import top from "../images/pizza_image.png";
import ("../pages/landing.css");



class Landing extends Component {

    state={
        users:{},
        username:"",
        password:""
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

     render(){
        return(
            <Container>
                <Nav/>
                
                <div className="landing-head">
                
           
        
                </div>

                <div className="hero-text" style={{marginTop:70, zIndex:5}}>

<h1>A picture <br>
</br>is worth a thousand <br></br>words...</h1>



</div>


                
                

            
            
            
            
           

           

            

           


            
           
            </Container>
        )
    }
    
}

export default Landing;
