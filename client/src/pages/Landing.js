import React, { Component } from "react";
import API from "../utils/API";


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
            <div className="container">
            <p>Yep this is the Landing Page</p>
            </div>
        )
    }
    
}

export default Landing;
