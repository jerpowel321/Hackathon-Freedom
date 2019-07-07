import React, { Component } from "react";
import API from "../../utils/API";
import HandleImageUploads from "../../components/DropZone";
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router'

class jobpost extends Component {
  state = {
    chefid: 1,
    name: "",
    description: "",
    ingredients: "",
    portions: -1,
    tags: "",
    status: "Available",
    price: "",
    image: window.imageURL,
    chef: null,
    redirect: false
  }
  createNewJob = (event) => {
    if (this.state.name == null) {
      return <div>Please provide a name for your dish.</div>
    }
    if (this.state.description == null) {
      return <div>Please provide a description for your dish. </div>
    }
    if (this.state.portions == null) {
      return <div>Please provide a portion size available for sale.</div>
    }
    if (this.state.price == null) {
      return <div>Please provide a price for your dish.</div>
    }

    else {
      console.log("Inside Create new Job!!--------------------")
      event.preventDefault();
      const newJob = {
        chefid: this.state.chefid,
        name: this.state.name,
        description: this.state.description,
        ingredients: this.state.ingredients,
        portions: this.state.portions,
        tags: this.state.tags,
        status: this.state.status,
        price: this.state.price,
        image: window.imageURL,
        chef: this.state.chef
      }
      console.log(newJob)
      API.saveJob(newJob)
        .then(res => {
          console.log(res)
          console.log("This is the response")
          if (res.errors) {
            console.log(res.errors)
          }
          this.setState({ redirect: true })

        });
    }
  }


  handleInputChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
  render() {

     if (this.state.redirect) {
       return <Redirect to='/chef/orders'/>;
     }

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
              <li class="nav-item">
                <a class="nav-link" href="/dashboard">Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/chef/jobpost">Post a Meal<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/chef/orders">My Orders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/chef/profile">Account</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container w-50">
          <form className="pt-5 pb-5">
            <div className="text-center">
            <h1 className="text-center green">Post a Meal</h1>
            </div>
            <div className="form-group">
              <label for="mealName">Meal</label>
              <input name="name" type="text" className="form-control" id="mealName" placeholder="Lasagna" onChange={this.handleInputChange} />
            </div>
            <div class="form-group">
              <label for="description">Meal Description</label>
              <textarea name="description" class="form-control" id="description" rows="3" placeholder="My family has been cooking this dish for generations. We make the pasta from scratch and use the best quality ingredients. We hope you can enjoy our dish as much as we enjoy making it and sharing it with you all." onChange={this.handleInputChange} ></textarea>
            </div>
            <div className="form-group">
              <label for="ingredients">Ingredients</label>
              <input name="ingredients" type="text" className="form-control" id="ingredients" placeholder="tomatoes, ground beef, pasta" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label for="portions">Quantity</label>
              <select name="portions" className="form-control" id="portions" onChange={this.handleInputChange} >
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
            <div className="form-group">
              <label for="tags">Tags</label>
              <input name="tags" type="text" className="form-control" id="tags" placeholder="gluten free, vegetarian, kosher" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label for="price">Sales Price</label>
              <input name="price" type="number" className="form-control" id="price" placeholder="10" onChange={this.handleInputChange} />
            </div>
            <HandleImageUploads  
						url='https://api.cloudinary.com/v1_1/dbpqzyaat/image/upload'
						preset='i5aglck3'
						// setUserImages={setUserImages}
					/>
            <div className="text-center">
              <button type="submit" className="btn bggreen text-white hvr-grow-shadow" onClick={this.createNewJob}> <b className="text-white">Submit</b></button>
            </div>
          </form>
        </div>

      </div>
    )
  }

};


export default jobpost;
