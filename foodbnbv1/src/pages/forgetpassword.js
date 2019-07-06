import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";




class PasswordForgetPage extends Component {

  render() {
  

    return (


      <div className="createOrder">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img className="ml-3 mr-2" id="logo" src="../images/foodlogo.png" alt="logo"/>
                <a class="navbar-brand">Food BnB</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" >Forget Password<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/signin">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container w-50">
        <form className="pt-5 pb-5">
          <div className="text-center">
          <h1 className="text-center green">Forget Password</h1>
          </div>
          <div className="form-group">
            <label for="chefEmail">Email</label>
            <input name="email" type="text" className="form-control" id="chefEmail" placeholder="gordanramsey@gmail.com"/>
          </div>
 
         
          <div className="text-center">
            <button type="submit" className="btn bggreen text-white hvr-grow-shadow" onClick={this.createNewJob}> <b className="text-white">Submit</b></button>
          </div>
        </form>
      </div>

    </div>
    );
  }
}



export default PasswordForgetPage;

