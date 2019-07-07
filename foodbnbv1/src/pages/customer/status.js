import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav"
import { Link, NavLink } from 'react-router-dom';
import Footer from "../../components/Footer"
class Status extends Component {
    constructor(props) {
        super(props);
        if (window.persist == null)
        {
            window.persist = {}
            window.persist.order = {}
            window.persist.order["order"]
        }
    }

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
                    <br></br>
                    <h3>Checkout</h3>
                    <br></br>
                </div>
                <div className="container">
                    <div className="receipt">


                        <div className="row">
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
                                        <h5 class="card-title">Payment</h5>
                                        <form>
                                            <div className="form-row">
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Name on Card"></input>
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Card Number"></input>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="form-row">
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Expiry Date"></input>
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="CVC"></input>
                                                </div>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-6 float-right">
                                <div className="card">
                                    <div className="card-body">
                                        <h5>Order Summary</h5>
                                        <br></br>
                                        <div className="row">
                                            <div className="mx-auto">
                                                <img className="ml-3 mr-2" id="logo" src="../images/foodlogo.png" alt="logo" />
                                                <b><a className="navbar-brand"><span className="green">Food</span><span className="orange">Drop</span></a></b>
                                            </div>
                                        </div>

                                        <br></br>

                                        <div>
                                            <h6 className="font-weight-bold">Item(s):</h6>
                                        </div>
                                        <div className="row">
                                            <div className="col-9">
                                                <h7>{window.persist.order["order"].name}</h7>
                                            </div>
                                            <div className="col-3">
                                                <p className="float-right">$ {window.persist.order["order"].price_per_meal} x {window.persist.order["order"].portions_bought}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9">
                                                <h7>Delivery Fees:</h7>
                                            </div>
                                            <div className="col-3">
                                                <p className="float-right">$ 5.00</p>
                                            </div>
                                        </div>

                                        <div>
                                            <b><h7>Total:</h7></b>
                                            <p className="float-right">$ {window.persist.order["order"].total_price + 5}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                        {/* <div className="inline-block"> */}



                        {/* <br></br> */}

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title">Select Delivery Time</h5>



                                        <p>We'll drop it off at your door, eat it fresh, be there to pick it up!</p>
                                        <form>
                                            <div className="form-group">
                                                <h6>1-hour delivery windows</h6>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label className="form-check-label" for="exampleRadios1">
                                                        11:00 AM to 12:00 PM
                                            </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label className="form-check-label" for="exampleRadios1">
                                                        12:00 PM to 13:00 PM
                                            </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label className="form-check-label" for="exampleRadios1">
                                                        13:00 PM to 14:00 PM
                                            </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                                    <label className="form-check-label" for="exampleRadios1">
                                                        14:00 PM to 15:00 PM
                                            </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>





                            <div className="col-sm-6">
                                <div className="row">
                                    
                                    <div className="mx-auto">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <button className="btn btn-outline-success btn-lg text-monospace" type="submit"><NavLink className="burp" id="burp" to="/"><span className="spinner-grow spinner-grow-sm"></span><strong>Order</strong></NavLink></button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        //Items (1):    $2.99
                        //Delivery Fee: -
                        //Total before tax & tip:   $2.99
                        //Tip:  $5.00
                        //Order total: $7.99
                        // Order completed 
                        // Math Floor
