

import React from "react";

function Nav({ children }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="ml-3 mr-2" id="logo" src="../images/foodlogo.png" alt="logo"/>
                <a className="navbar-brand">Food BnB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link pr-5" href="/signin">Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {children}
        </div>
    );
}

export default Nav;