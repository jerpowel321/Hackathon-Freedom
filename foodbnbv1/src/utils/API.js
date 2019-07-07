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
    searchcooks() {
      return axios.get(BASEURL + "/chefs")
    },

    
    getChefById(id) {
      return axios.get(BASEURL + "/chefs/" + id);
    },

    getCustomerById(id) {
      return axios.get(BASEURL + "/customers/" + id);
    },

    /**
     * On success (if the customer can afford it, and there is still portions left)
     * will return a customer buy order
     * {
     *  id: number,
     *  customer_id: number,
     *  order_id: number,
     *  amount: number,
     *  ordered_by: date-time (probably a string)
     * }
     * 
     * @param number customerId 
     * @param number orderId 
     * @param number amount
     */
    buyOrder(customerId, orderId, amount=1) {
      return axios.post(BASEURL + "/buy/", {
        "customer_id": customerId,
        "order_id": orderId,
        "amount": amount
      });
    },

    /**
     * Same as buyOrder, but also gets the data.
     * e.g.
     * {
     *    "customer": {
     *        "id": 2,
     *        "name": "Alice",
     *        "profile_img": null,
     *        "address": "Example Avenue 10",
     *        "zipcode": 0,
     *        "credits": 8931,
     *        "email": "alice@anycryptbook.com"
     *    },
     *    "order": {
     *        "id": 12,
     *        "name": "Singaporian Cuisine",
     *        "description": "Fried Calamari",
     *        "price_per_meal": 10,
     *        "total_price": 10,
     *        "portions": -6,
     *        "portions_bought": 1
     *    },
     *    "chef": {
     *        "id": 1,
     *        "name": "Test Person",
     *        "profile_img": null,
     *        "zipcode": 123123
     *    },
     *    "ordered_date": "2019-07-07T11:03:17.5393042-07:00"
     * }
     * @param number customerId
     * @param number orderId
     * @param number amount
     */
    buyOrderGetData(customerId, orderId, amount=1) {
      return axios.post(BASEURL + "/buy/extra", {
        "customer_id": customerId,
        "order_id": orderId,
        "amount": amount
      });
    },

    /**
     * returns all the orders a customer has placed.
     */
    getOrdersByCustomer(customerId) {
      return axios.get(BASEURL + "/buy?customer=" + customerId);
    },

    /**
     * returns all the customers that have bought a portion of the order.
     */
    getCustomersByOrder(orderId) {
      return axios.get(BASEURL + "/buy?customer=" + orderId);
    },

    getReviewsForChef(chefID) {
      return axios.get(BASEURL + "/reviews?chef=" + chefID);
  },
};