import React from "react";
import {Col, Row, Container} from "../Grid";
import ("../Modal/modal.css");

function Modal ({props, children}) {
    return(
        
      <Container>
        <div className= "modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
  <div className="modal-dialog modal-dialog-centered" role="document" {...props}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Sign-Up</h5>
        <p>Please fill in this form to create an account.</p>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
    
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    
        <label>
          <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"/> Remember me
        </label>
    
        <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
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

export default Modal;

