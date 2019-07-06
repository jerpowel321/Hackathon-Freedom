

import React from "react";

function Nav({ children }) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img className="ml-3 mr-2" id="logo" src="../images/foodlogo.png" alt="logo"/>
                <a class="navbar-brand">Food BnB</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link pr-5" href="/signin">Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {children}
        </div>
    );
}

export default Nav;