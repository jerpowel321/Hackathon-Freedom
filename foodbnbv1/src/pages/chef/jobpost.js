import React, { Component } from "react";




class jobpost extends Component {

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
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">Example multiple select</label>
            <select multiple className="form-control" id="exampleFormControlSelect2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
        </div>

      </div>
    )
  }

};


export default jobpost;
