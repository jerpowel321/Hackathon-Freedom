import React, { Component } from "react";
import API from "../../utils/API";
import HandleImageUploads from "../../components/DropZone";
// import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router'
import { Accordion, Card, Button } from 'react-bootstrap';
import Stars from "../../components/Stars";
import { Link, NavLink } from 'react-router-dom';
import Footer from "../../components/Footer"
import { renderComponent } from "recompose";

class jobpost extends Component {
  state = {
    reviews: [],
    redirect: false
  }

  constructor(props) {
    super(props);
    this.submitOrder = this.submitOrder.bind(this);
  }

  submitOrder() {
    const amount = document.getElementById("exampleFormControlSelect1").value;
    API.buyOrderGetData(2, 15, amount).then(x => {
      console.log(x.data);
      if (window.persist == null) {
        window.persist = {}
      }
      window.persist["order"] = x.data;
      this.props.history.push("/customer/status");
    });
  }

  viewReviews(id) {
    API.viewReview(id)
      .then(res => {
        this.setState({ reviews: res.data })
      })
      .catch(err => console.log(err));

  }

  render() {
    console.log(this.state);
    console.log("here")
    console.log("here")
    console.log("here")

    if (this.state.redirect) {
      console.log("there")
      console.log("there")
      console.log("there")
      return <Redirect to="/customer/status" />;
    }

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
        <div className="foodDescription  text-center pt-5">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <h2 className="pb-2"> Homemade Hot & Sour Soup</h2>
              <img className="pt-3" id="soup" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ping_SJ_hot_%26_sour_soup.JPG/1920px-Ping_SJ_hot_%26_sour_soup.JPG" alt="Hot and Sour Roup" />
              <h4> <Stars rating="3" /></h4>
              <p>23 Reviews</p>
              <p className="text-left black">Ingredients:  bamboo shoots, toasted sesame oil, wood ear, cloud ear fungus, day lily buds, vinegar, egg, corn starch, and white pepper </p>
              <p className="text-left black">Available Quantity for Sale: <b className="orange">10</b></p>
              <p className="text-left black">Price per Order: <span className="green">$7</span></p>
              <h2 className="pt-5">About the Chef</h2>
              <img id="salt" src="https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif" alt="Salt Bae"></img>
              <p className="pt-3 black text-left"> You may know me as a humble father, husband, friend, or you may know me from my excellent seasoning skills. Either way, it's a pleasuree to cook for you.</p>
              <Stars rating="4" />
              <p>3 Reviews</p>

              <div className="d-flex pt-2">
                <div className="col-sm-5">
                  <h4>Thomas Tran</h4>
                  <p className="text-left black">Sassiest chef I have ever seen. I've never tried so many spices in my life. No wonder he's saucy.</p>
                </div>
                <div className="col-sm-5">
                  <h4>Jose Calderon</h4>
                  <p className="text-left black">The food was fantastic! Exceeded expectations. Great chef.</p>
                </div>
                <div className="col-sm-5">
                  <h4>Jessica Simpson</h4>
                  <p className="text-left black">I don't like chinese food but I like him.</p>
                </div>

              </div>
              <div className="text-center pt-2">
                  <button className="btn btn-md bggreen p-2 hvr-grow-shadow p-2 border-dark"><b className="text-white">White a Review</b></button>
                </div>
            </div>
            {/* <div className="col-sm-1"></div> */}
            <div className="col-sm-5">
              <h2>Previous Dishes</h2>
              <div id="prevdish" className="pt-3">
                <img className="previmg" src="../../images/c10.jpg" alt="Food Image" />
                <img className="previmg" src="../../images/c11.jpg" alt="Food Image" />
                <img className="previmg" src="../../images/c12.jpg" alt="Food Image" />
                {/* <img className="previmg" src="https://media-cdn.tripadvisor.com/media/photo-s/04/70/fc/34/home-cooked-meals-meatballs.jpg" alt="Food Image" /> */}
                <img className="lastImg" src=" https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/01/tagine-main.jpg" alt="Food Image" />
              </div>

              <div class="form-group">
                <h3 className="pt-3">Quantity to Order</h3>
                <select class="form-control col-sm-6 mx-auto text-center" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <div className="text-center pt-2">
                <a className="btn btn-md bggreen p-2 hvr-grow-shadow p-2 border-dark" onClick={this.submitOrder}>
                  {/* <NavLink className="" to="/customer/status"> */}
                    <b className="text-white">Order Now</b>
                  {/* </NavLink> */}
                </a>
              </div>

{/* 
              <div className="text-center pt-2">
                <button className="btn btn-md bggreen p-2 hvr-grow-shadow p-2 border-dark"><NavLink className="" to="/customer/status"><b className="text-white">Check Out</b></NavLink></button>
              </div> */}

            </div>
          </div>
        </div>
        <div className="reviews">


        </div>
        <Footer />
      </div>
    )
  }

};


export default jobpost;
