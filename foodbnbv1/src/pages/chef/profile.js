import React from 'react'



const Profile = () =>
    <div>
        <div id='basic-info'>
            <h1>props.name</h1>
            <p>props.email</p>
            <p>Place Image here</p>
            <p>props.bio</p>
            <p>Zip Code: props.zip</p>
        </div>
        <div id='food-info'>
            <p>Main Cuisine: props.cuisine</p>
            <p>Specialties</p>
            <ul>
                <li>First Specialty ... </li>
            </ul>
            <p>Reviews</p>
            <ul>
                <li>Reviews Here</li>
            </ul>
        </div>
    </div>
    

export default Profile
