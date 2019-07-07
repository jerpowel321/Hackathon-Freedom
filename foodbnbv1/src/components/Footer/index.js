import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 bg-dark searchfooter">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h3 className="title pl-5 p-1"><span className="green">Food</span><span className="text-white">Drop</span></h3>
            {/* <img className="pl-5 pb-2" id="footerimg" src="../../images/foodlogo.png" alt="logo"/> */}
            <b><p className=" pl-5 pb-1 green">
              An intimate food experience.
            </p></b>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title green">About Food<span className="text-white">Drop</span></h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Read our blog</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sign Up</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Make an Account</a>
              </li>

            </ul>
            
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title green">Get Help</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Read FAQs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">View all cities</a>
              </li>
            </ul>
            
          </MDBCol>
        </MDBRow>
        
        <hr></hr>
        <MDBRow>
          <MDBCol md="6">
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title"></h5>
           
            <div>
            <a className="pr-4"href="#!">Privacy Policy</a>
            <a className="pr-4" href="#!">Terms of Use</a>
            <a className="pr-4" href="#!">Pricing</a>
            </div>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
      <div className="footer-copyright text-white text-center py-3 pt-5">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: FoodDrop 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;