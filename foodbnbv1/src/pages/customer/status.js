
import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav"
import { Link, NavLink } from 'react-router-dom';
import Footer from "../../components/Footer"



class Status extends Component {
    state = {
        // results: [],
        // search: "",
    }


    render() {
        return (

            <div>

                <div>
                    <Nav>
                    </Nav>
                </div>

                <div className="text-center">
                    <h3>Checkout</h3>
                    <br></br>
                </div>
                <div className="container">
                    <div className="receipt">

                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="float-right">
                                        <button type="button" className="btn btn-link flex-end">Edit</button>
                                    </div>
                                    <h5 class="card-title">Delivery Address</h5>
                                    <p class="card-text">1 Unicorn Street <br></br>
                                        San Francisco, CA, 94129 <br></br>
                                        USA
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* <form>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Default checkbox
                                        </label>
                                </input>

                            </div>
                        </form> */}

                    </div>
                </div>

          
            <Footer></Footer>
   


            </div>




        )
    }
}

export default Status;



                //1-hour delivery windows
                 //4:00 - 6:00 PM
                //$4.99
                 //6:00 - 8:00 PM
                //$4.99
                 //8:00 - 10:00 PM
                //$4.99


                //Tip:  $5.00 (recommended) Edit

                //Order Summary
                //Items (1):	$2.99
                //Delivery Fee:	-
                //Total before tax & tip:	$2.99
                //Tip:	$5.00

                //Order total: $7.99

                // Order completed 
                // Math Floor




