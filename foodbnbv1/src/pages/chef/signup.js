import React from 'react'



const CreateProfile = () => 
    <div className='signuppage text-center'>
        <form className="pt-5 pb-5">
            <h1>Your Profile</h1>
            <div className="form-group row">
                <div className='col-sm-6'>
                    <label for="Profile" className>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name"/>
                </div>
                <div className="col-sm-6">
                    <label for="Profile">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <label for="Profile">Email address</label>
                    <input type="email" class="form-control" placeholder="name@example.com"/>
                </div>
                <div className="col-sm-6">
                    <label for="Profile">Password</label>
                    <input type="password" class="form-control" placeholder="Password"/>
                </div>
            </div>
            <div className="form-group justify-content-center">
                <label for="Profile" >Profile Picture</label>
                <div className="row text-center">
                    <input type="file" className="form-control-file col-sm-6"/>
                </div>
            </div>
            <div className="form-group">
                <label for="Profile">Short Bio</label>
                <textarea class="form-control" placeholder="I am an amateur chef who..." rows="3"></textarea>
            </div>
            <div className="form-group row">
                <div className="form-group col-sm-6">
                    <label for="Profile">Main Cuisine</label>
                    <select class="form-control">
                        <option>American</option>
                        <option>Indian</option>
                        <option>Asian</option>
                        <option>Mediterranean</option>
                        <option>Middle East</option>
                    </select>
                </div>
                <div className="form-group col-sm-6">
                    <label for="Profile">Zip Code</label>
                    <input type="text" class="form-control" placeholder="Last Name"/>
                </div>
            </div>
            
            <div class="form-group">
                <label for="Profile">Specialties(comma separated)</label>
                <textarea class="form-control" placeholder="Vegetarian, Spicy..." rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Create your profile</button>
        </form>
    </div> 

export default CreateProfile