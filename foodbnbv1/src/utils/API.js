import axios from "axios";
const BASEURL = "https://foodbedandbackend.azurewebsites.net/api";

export default {
    // Queries Heroku App API
    //Jennifer
    saveJob(Job) {
        return axios.post(BASEURL + "/orders", Job)
    },
    
};