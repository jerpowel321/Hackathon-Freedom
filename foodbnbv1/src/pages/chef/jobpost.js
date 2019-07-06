import React, { Component } from "react";
import API from "../../utils/API"

class jobpost extends Component {
  state = {
    chefid: 1,
    meal: "",
    mealdescription: "",
    portion: "",
    cusine: "",
    zipcode: "",
    status: "available",
    price: "",
  }
  createNewJob = (event) => {
    if (this.state.meal == null) {
      return <div>Please provide a name for your dish.</div>
    }
    if (this.state.mealdescription == null) {
      return <div>Please provide a description for your dish. </div>
    }
    if (this.state.portion == null) {
      return <div>Please provide a portion size available for sale.</div>
    }
    if (this.state.cusine == null) {
      return <div>Please provide a cusine type for your dish.</div>
    }
    if (this.state.zipcode == null) {
      return <div>Please provide your zipcode</div>
    }
    if (this.state.price == null) {
      return <div>Please provide a price for your dish.</div>
    }

    else {
      console.log("Inside Create new Job!!--------------------")
      event.preventDefault();
      const newJob = {
        chefid: this.state.chefid,
        meal: this.state.meal,
        mealdescription: this.state.mealdescription,
        portion: this.state.portion,
        cusine: this.state.cusine,
        zipcode: this.state.zipcode,
        status: this.state.status,
        price: this.state.price,
      }
      console.log(newJob)
      API.saveJob(newJob)
        .then(res => {
          console.log(res)
          console.log("This is the response")
          if (res.errors) {
            console.log(res.errors)
          }
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

    return (
      <div className="createOrder">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
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
            <h1 className="text-center green">Post a Meal</h1>
            <div className="form-group">
              <label for="mealName">Meal</label>
              <input name="meal" type="text" className="form-control" id="mealName" placeholder="Lasagna" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label for="mealDescription">Meal Description</label>
              <input name="mealdescription" type="text" className="form-control" id="mealDescription" placeholder="Gordon Ramsay" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label for="portion">Portion Size</label>
              <select name="portion" className="form-control" id="portion" onChange={this.handleInputChange} >
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
              <label for="Cusine">Type of Cusine</label>
              <select name="cusine" multiple className="form-control" id="Cusine" onChange={this.handleInputChange} >
                <option value="American">American</option>
                <option value="Cajun">Cajun</option>
                <option value="Chinese">Chinese</option>
                <option value="Thai">Dessert</option>
                <option value="French<">French</option>
                <option value="Filipino">Filipino</option>
                <option value="Greek">Greek</option>
                <option value="Indian">Indian</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Polish">Polish</option>
                <option value="Peruvian<">Peruvian</option>
                <option value="Russian">Russian</option>
                <option value="Taiwanese">Taiwanese</option>
                <option value="Thai">Thai</option>
                <option value="Thai">Vietnamese</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label for="price">Sales Price</label>
              <input name="price" type="text" className="form-control" id="price" placeholder="10" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label for="chefZipcode">Zip Code</label>
              <input name="zipcode" type="text" className="form-control" id="chefZipcode" placeholder="94111" onChange={this.handleInputChange} />
            </div>
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
