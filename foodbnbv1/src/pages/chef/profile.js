import React from 'react';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";


const Profile = () =>
    <div className="propage">
      <Nav />
        <div id='basic-info' className="text-center col-sm-5 mx-auto pt-3 black">
            <h2 className="orange"><span className="green">Aryan</span>Varshney</h2>
            <p className="green">aryan@gmail.com</p>
            <img id="profImg" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Profile Picture"/>
            <p className="black pt-2"><b className="orange">About Me:</b> I am a home cook who loves making Indian Food</p>
            <p className="black"><b className="orange">Zip Code:</b> 94539</p>
            <div className="black pb-3" id='food-info'>
            <p className="black"><b className="orange">Main Cuisine:</b> Indian</p>
            <p className="black"><b className="orange">Specialties: </b>Spicy Food, Vegetarian Food</p>
            
            <div className="text-center">
              <button className="btn btn-md bggreen p-2 hvr-grow-shadow p-2 border-dark"><b className="text-white">Edit Profile</b></button>
            </div>
           
        </div>
        </div>
        <Footer />
    </div>
    

export default Profile
