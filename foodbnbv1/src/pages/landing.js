import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {
    
    return (
        <div className="landing">
         <h1 className="text-center pt-5">
            <Link to="/chef/profile">I am a chef!</Link> 
         </h1>

         <h1 className="text-center">
           <Link to="/search">I am looking for home cooked meals!</Link>
         </h1>
        </div>
    )
  }

};


export default Landing;