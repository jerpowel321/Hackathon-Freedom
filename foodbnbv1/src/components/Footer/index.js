import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 bg-dark searchfooter">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h4 className="title pl-5 p-1">FoodDrop</h4>
            <img className="pl-5 pb-2" id="footerimg" src="../../images/foodlogo.png" alt="logo"/>
            <b><p className="text-info pl-5 pb-1">
              An intimate food experience.
            </p></b>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">About FoodDrop</h5>
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
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
            
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Get Help</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Read FAQs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">View all cities</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
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
            <ul>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms of Use</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pricing</a>
              </li>
            </ul>
            
          </MDBCol>
        </MDBRow>

      </MDBContainer>
      <div className="footer-copyright text-white text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: FoodDrop 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;