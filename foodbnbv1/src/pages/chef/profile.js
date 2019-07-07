import React from 'react';
import Footer from "../../components/Footer";


const Profile = () =>
  <div className="propage">
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="ml-3 mr-2" id="logo" src="../images/foodlogo.png" alt="logo" />
        <b><a className="navbar-brand"><span className="green">Food</span><span className="orange">Drop</span></a></b>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li class="nav-item active">
                <a class="nav-link" href="/chef/profile">Account<span class="sr-only">(current)</span></a>
              </li>
            <li className="nav-item">
              <a className="nav-link pr-2" href="/chef/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pr-2" href="/chef/jobpost">Post a Meal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pr-2" href="/">Search Meals</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Sign Out</a>
              </li>
          </ul>
        </div>
      </nav>


    </div>
    <div className="row">
      <div id='basic-info' className="text-center col-sm-7 pt-3 black">
        <h2 className="orange"><span className="green">Aryan</span>Varshney</h2>
        <p className="green">aryan@gmail.com</p>
        <img id="profImg" src="/images/profpic.jpg" alt="Profile Picture" />
        <p className="black pt-2"><b className="orange">About Me:</b> I am a home cook who loves making Indian Food.  </p>
        <p className="black"><b className="orange">Zip Code:</b> 94539</p>
        <div className="black pb-3" id='food-info'>
          <p className="black"><b className="orange">Main Cuisine:</b> Indian</p>
          <p className="black"><b className="orange">Specialties: </b>Spicy Food, Vegetarian Food</p>

          <div className="text-center">
            <button className="btn btn-md bggreen p-2 hvr-grow-shadow p-2 border-dark"><b className="text-white">Edit Profile</b></button>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 mx-auto pt-3 text-center">
          <h2 className="black text-center">Past Meals <span className="orange">Sold</span></h2>
          <img id="indianFood" src="https://s3.amazonaws.com/bkbrains/images/courses/000/000/414/Cooking%20Class%20Ingredients_bio.jpg?1339434155" alt="indianfood"></img>
          <h2 className="black text-center pt-3"> Meals <span className="orange">Available</span></h2>
          <img className="indianchicken" src="https://content3.jdmagicbox.com/comp/gurgaon/n9/011pxx11.xx11.091118000605.i7n9/catalogue/tandoori-tantra-south-city-2-gurgaon-home-delivery-restaurants-c9tm2eujfy.jpg" alt="chicken"></img>
        </div>
        
      </div>
      
    </div>
    <Footer />
  </div>


export default Profile
