import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron"
// import { Col, Row, Container } from "../../components/Grid";

class Search extends Component {
   state = {
       results: [],
       search: "",
   }

   handleInputChange = event => {
       this.setState({ search: event.target.value });
   };

   handleFormSubmit = event => {
       event.preventDefault();
       API.searchcooks(this.state.search)
           .then(res => {
               console.log(res.data)
               if (res.data.status === "error") {
                   throw new Error(res.data.message);
               }
               this.setState({ results: res.data.items });
           })
           .catch(err => this.setState({ error: err.message }));
   };



   render() {

       let keyCount = -1;
       return (
          
           <div className="container">

           <div>
               <Jumbotron>
                   <b><h1 className="jumbo-text"><i className="fas fa-search"></i>   Search for home cooked food </h1></b>
               </Jumbotron>
               </div>
               <div className="search container pt-2 my-1">
                   <div className="form-group mb-4">
                       <b><label className="text-info" htmlFor="cook">What are you craving?</label></b>
                       <input
                           value={this.state.search}
                           onChange={this.handleInputChange}
                           name="cook"
                           list="cooks"
                           type="text"
                           className="form-control"
                           placeholder="Banh Mi"
                           id="cook"
                       />
                       <button onClick={this.handleFormSubmit} className="btn btn-info mt-3 mb-2">
                           Search
                       </button>
                   </div>
               </div>
               <div className="pb-2 mb-2" id="cooks" className="container px-5">
                   {this.state.results.map(cook => {
                       keyCount++;
                       return (<div value={cook} key={keyCount}>
                           <hr></hr>
                           <h2 className="text-center text-info mt-2">{cook.volumeInfo.title}</h2>
                           <p className="text-center">Author: {cook.volumeInfo.authors ? cook.volumeInfo.authors[0] : "No author listed"}</p>
                           <img className="rounded mx-auto d-block" src={cook.volumeInfo.imageLinks ? cook.volumeInfo.imageLinks.smallThumbnail : "No Image Listed"}></img>
                           <p className="pt-4">Description: {cook.volumeInfo.description}</p>
                           <div className="buttonContainer text-center">
                               <a href={cook.volumeInfo.previewLink} target="_blank">
                                   <button className="btn btn-info rounded mx-2 mb-4 cookButton">cook preview</button>
                               </a>
                               <button className="btn btn-info rounded mx-2 mb-4 cookButton" onClick={() => this.handleSavecook(keyCount)}>Save cook</button>
                           </div>
                       </div>)
                   })}
               </div>


           </div>

       )
   }
}

export default Search;