import React, { Component } from "react";
import API from "../utils/API";
import test from "../images/plated_food.png";
import top from "../images/pizza_image.png";
import ("../pages/style.css");



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
            <div className="container test">
                

            <div className="landing-screen">
            <div className="bg-image">
            <div class="overlay"></div>
            
            </div>
            
            <div className="bg-text">

<h1>Snap It!</h1>
<h6>A picture is worth a thousand words...</h6>


</div>

           

            

           


            
            </div>
            </div>
        )
    }
    
}

export default Landing;
