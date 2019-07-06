import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: "url(https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)", Backgroundposition: "centre centre"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;