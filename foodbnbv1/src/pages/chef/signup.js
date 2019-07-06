import React from 'react'



const CreateProfile = () => 
    <div>
        <h1>Your Profile</h1>
        <form>
            First Name: <input type='text'></input> <br/>
            Last Name: <input type='text'></input> <br/>
            Email: <input type='text' id='email-field'></input> <br/>
            Password: <input type='password'></input> <br/>
            Confirm Password: <input type='password'></input> <br/>
            Profile Picture: <input type='image' alt='Profile Picture'></input> <br/>
            Short Bio: <br/> <input type='text' id='bio-field'></input> <br/>
            Zip Code: <input type='text'></input> <br/>
            Choose a Cuisine: <br/>
            <input type="radio" name="cuisine1" value="American"></input> American<br/>
            <input type="radio" name="cuisine2" value="Indian"></input> Indian<br/>
            <input type="radio" name="cuisine3" value="Asian"></input> Asian<br/>
            <input type="radio" name="cuisine4" value="Mediterranean"></input> Mediterranean<br/>
            Specialties (Comma separated): <input type='text'></input><br/>
        </form>
        <button type='button' href='../jobpost.js'>Save Your Profile</button>
    </div> 

export default CreateProfile