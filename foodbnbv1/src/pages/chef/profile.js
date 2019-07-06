import React from 'react'



const Profile = ({props}) =>
    <div>
        <div id='basic-info'>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <img src={props.profile_img} alt='Profile Pic'/>
            <p>{props.bio}</p>
            <p>Zip Code: {props.zip}</p>
        </div>
        <div id='food-info'>
            <p>Main Cuisine: {props.cuisine}</p>
            <p>Specialties</p>
            <ul>
                {props.specialties.map((special) => (
                    <li>{special}</li>
                ))}
            </ul>
        </div>
    </div>
    

export default Profile
