import React, { Component } from "react";
import API from "../../utils/API";
import HandleImageUploads from "../../components/DropZone";
// import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router'
import { Accordion, Card, Button } from 'react-bootstrap';

class jobpost extends Component {
  state = {
    reviews: [], 
  }

  viewReviews(id) {
    API.viewReview(id)
      .then(res => {
        this.setState({ reviews: res.data })
      })
      .catch(err => console.log(err));

  }

  render() {


    return (
      <div className="chineseFoodPage">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <img className="ml-3 mr-2" id="logo" src="../images/foodlogo.png" alt="logo" />
          <b><a className="navbar-brand"><span className="green">Food</span><span className="orange">Drop</span></a></b>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Search</a>
              </li>

            </ul>
          </div>
        </nav>
        <div className="foodDescription">
          <div className="row">
            <div className="col-sm-6">
            <p>How are you</p>
            </div>
            <div className="col-sm-6">
            <p>How are you</p>
              </div>
          </div>
        </div>
        <div className="reviews">
          

        </div>
      </div>
    )
  }

};


export default jobpost;
