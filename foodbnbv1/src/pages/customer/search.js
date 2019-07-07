import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron"
import Nav from "../../components/Nav"
import { Link, NavLink } from 'react-router-dom';
// import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer"
import ImageRow from "../../components/ImageRow"

class Search extends Component {

  state = {
    results: [],
    search: "",
    availableMeals: [],
    selectedMeal: [],
    zipcode: ""
  }

  componentDidMount() {
    API.getAvailableMeals()
      .then(res => {
        console.log("data:", res.data)
        this.setState({ availableMeals: res.data })
      })
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchcooks(this.state.search)
      .then(res => {
        console.log(res.data)
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data });
      })
      .catch(err => this.setState({ error: err.message }));
  };



  render() {

    const imageClick = (meal) => {
      console.log('Click');
      console.log(meal);
      this.setState({ selectedMeal: meal })
      console.log(this.state.selectedMeal)
      console.log(this.state)
    } 

    let keyCount = -1;
    return (
      <div>
        <Nav></Nav>



        <div className="container searchPage">

          <div>
            <Jumbotron>
              <b><h1 className="jumbo-text"><i className="fas fa-search"></i>   Search for home cooked food </h1></b>
            </Jumbotron>
          </div>
          <div className="search container pt-2 my-1">
            <div className="form-group mb-4">
              <b><label className="text-info" htmlFor="cook">What are you craving?</label></b>
              <input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="cook"
                list="cooks"
                type="text"
                className="form-control"
                placeholder="Banh Mi"
                id="cook"
              />
              <button onClick={this.handleFormSubmit} className="btn btn-info mt-3 mb-2">
                Search
                       </button>
            </div>
          </div>
          <div className="pb-2 mb-2" id="cooks" className="container px-5">
            {this.state.results.map(cook => {
              keyCount++;
              return (<div className="col-sm-6 "value={cook} key={keyCount}>
                {/* <hr></hr> */}
                <div className="card">
                <h2 className="text-center text-info mt-2">{cook.name}</h2>
                <img className="rounded mx-auto d-block" src={cook.profile_img ? cook.profile_img : "No Image Listed"}></img>
                <p className="text-center">Bio: {cook.bio ? cook.bio : "No author listed"}</p>
                <p className="pt-4 text-center">Specialties: {cook.specialties}</p>
                <div className="buttonContainer text-center">
                  {/* <button className="btn btn-info rounded mx-2 mb-4 cookButton" onClick={() => this.handleSavecook(keyCount)}>Save cook</button> */}
                </div>
                </div>
              </div>)
            })}
          </div>

          <div className="mt-5" id="availableMeals" className=" pt-3 pb-5">
            <h1 className="orange">Available Meals Near San Mateo</h1>
            <div className="row">
              {this.state.availableMeals.map(meal => {
                
                if(meal.image && meal.name){
                return (
               
                  <div key={meal.id} className=".col-8 col-sm-8 col-md-4 col-lg-3 ">
                    <div className="card mealCard mb-3">
                    <Link to={meal.name}><img className="mealImage" src={meal.image} alt="mealImage"/></Link>
                        <h5 className="card-title pt-2 text-center green">{meal.name}</h5>
                    </div>
                  </div>
                )
                }
              })}
            </div>
          </div>



          <div className="text-center">
              <button className="btn btn-md bggreen p-2 hvr-grow-shadow p-2 border-dark"><NavLink className="" to="/customer/status"><b className="text-white">GET ME TO RECEIPT</b></NavLink></button>
            </div>

        </div>
            <ImageRow/>
            <Footer/>
      </div>

    )
  }

}

export default Search;




