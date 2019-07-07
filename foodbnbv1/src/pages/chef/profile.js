import React from 'react'



const Profile = () =>
    <div>
        <div id='basic-info'>
            <h1>Aryan Varshney</h1>
            <p>aryan@gmail.com</p>
            <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Profile Picture"/>
            <p>I am a home cook who loves making Indian Food</p>
            <p>Zip Code: 94539</p>
        </div>
        <div id='food-info'>
            <p>Main Cuisine: Indian</p>
            <p>Specialties</p>
            <ul>
                <li>Spicy Food</li>
                <li>Vegetarian Food</li>
            </ul>
        </div>
    </div>
    

export default Profile
