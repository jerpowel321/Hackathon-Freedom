
import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav"



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


                    <div className="receipt">

                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="float-right">
                                        <button type="button" className="btn btn-link flex-end">Edit</button>
                                    </div>

                                    <h5 className="card-title">Delivery Address</h5>

                                    <p className="card-text">
                                    1 Unicorn Street
                                    <br></br>San Francisco, CA, 94129
                                    <br></br>USA
                                    </p>
                        </div>
                    </div>
                                </div>
                                </div>


                                <form>
                                </form>


                            </div>
                        
                        )
                    }
                }
                
        export default Status;
                
                
           