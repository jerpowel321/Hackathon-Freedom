import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';


// const INITIAL_STATE = {
//   email: '',
//   password: '',
//   isAdmin: '',
//   error: null,
// };

// onChange = event => {
//   this.setState({ [event.target.name]: event.target.value });
// };

class Landing extends Component {


  render() {

    return (
      <div className="landing">
        <div className="d-flex justify-content-center">
          <div className="div  signInCard">
            <h1 className=" text-center green pt-4">Looking for home cooked meals?</h1>
            <div className="text-center">
              <button className="btn btn-md bggreen p-2 hvr-grow-shadow p-2 border-dark"><NavLink className="" to="/search"><b className="text-white">Yes! Take me There.</b></NavLink></button>
            </div>
            <h1 className="text-center mr-5 green pt-5">Chef Sign In</h1>
            <form className="mt-3" >
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-3">
                  <b><label for="email" className="col-form-label green text-white"><i class="fas fa-envelope-square mr-1"></i>Email Address</label></b>
                </div>
                <div className="col-sm-5">
                  <input
                    name="email"
                    // value={email}
                    // onChange={this.onChange}
                    type="text"
                    placeholder="Enter Email Address"
                    id="email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-3">
                <b><label for="password" className=" col-form-label text-white"><i class="fas fa-lock mr-1"></i>Password</label></b>
                </div>
                <div className="col-sm-5">
                <input
                name="password"
                // value={password}
                // onChange={this.onChange}
                type="password"
                placeholder="Enter Password"
                id="password"
              />
                </div>
              </div>
              <br></br>
                <div className="text-center">
                <button name="button" className="btn btn-md bggreen text-white p-2 hvr-grow-shadow ml-5 mt-2 border-dark" onClick={this.onSubmit} type="submit">
                  <b>Sign In</b>
                </button>
                </div>
               
                <div>
                  <br></br>
                  <b><p><Link to="/forgetpassword">Forget Password</Link></p></b>
                  <b><p><Link to="/chef/signup">Dont have an account? Sign Up!</Link></p></b>
              </div>
              {/* {error && <p className="text-white darkbackground p-1 mt-3"><b>{error.message}</b></p>} */}
            </form>

          </div>
        </div>

      </div>
    )
  }

};


export default Landing;

