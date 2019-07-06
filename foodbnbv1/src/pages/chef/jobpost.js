import React, { Component } from "react";




class jobpost extends Component {
  state = {
	
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
       <div className="container">
        <form>
        <div className="form-group">
            <label for="chefName">Your Name</label>
            <input type="text" className="form-control" id="chefName" placeholder="Gordon Ramsay" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label for="chefEmail">Email address</label>
            <input type="email" className="form-control" id="chefEmail" placeholder="gordonRamsay@gmail.com" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label for="mealName">Meal</label>
            <input type="text" className="form-control" id="mealName" placeholder="Gordon Ramsay" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label for="mealDescription">Meal Description</label>
            <input type="text" className="form-control" id="mealDescription" placeholder="Gordon Ramsay" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label for="portion">Portion Size</label>
            <select className="form-control" id="portion" onChange={this.handleInputChange} >
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
            <select multiple className="form-control" id="Cusine" onChange={this.handleInputChange} >
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
            <label for="chefZipcode">Zip Code</label>
            <input type="text" className="form-control" id="chefZipcode" placeholder="94111" onChange={this.handleInputChange} />
          </div>
        </form>
        </div>

      </div>
    )
  }

};


export default jobpost;
