import axios from "axios";
const BASEURL = "https://foodbedandbackend.azurewebsites.net/api";

export default {
    // Queries Heroku App API
    //Jennifer
    saveJob(Job) {
        return axios.post(BASEURL + "/orders", Job)
    },
    getAvailableMeals() {
      return axios.get(BASEURL + "/orders?status=available")
    },
    getInProgressMeals() {
      return axios.get(BASEURL + "/orders?status=inprogress")
    },
    getInDeliveryMeals() {
      return axios.get(BASEURL + "/orders?status=indelivery")
    },
    getCompletedOrders() {
      return axios.get(BASEURL + "/orders?status=completedOrders")
    },
    getPrivateOrders() {
      return axios.get(BASEURL + "/orders?status=private")
    },

    
    getChefById(id) {
      return axios.get(BASEURL + "/chefs/" + id);
    },
    getCustomerById(id) {
      return axios.get(BASEURL + "/customers/" + id);
    },
};