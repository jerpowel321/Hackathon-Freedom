
import React, { Component } from "react";
import API from "../../utils/API";



class Status extends Component {
    state = {
        // results: [],
        // search: "",
    }


    render() {
        return (

            <div className="receipt-form">
                <form>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <h1 className="text-center largeTitles redText">{this.state.title}</h1>
                        </div>


                    

                    </div>
                    </form>
            </div>
        )
    }
}

    export default Status;


//Checkout

//Delivery Address Edit
// 1 UNICORN STREET,
//SAN FRANCISCO , CA 94129-2276
//Melanie Marsollier


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



/// Estimated time of arrival 