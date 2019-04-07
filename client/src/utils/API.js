import axios from "axios";

export default {
  //Users
  //******************************** */

  // Get user

  getUser: function(){
    console.log("Getting User ...");
    return axios.get("/api/user/")
  },

  // Save new User
  saveUser: function(userData) {
    console.log("Saving User ... ");
    return axios.post("/api/user/signup", userData);
  },

  loginUser: function(userData) {
    console.log("Logging User in...", userData)
      return axios.post("/api/user/login", userData)
  },

  logoutUser: function(event){
    console.log("we are at the API")
    return axios.post("api/user/logout")
  },

  // getAvatar: function (string){
  //   console.log("called");
  //   return axios("https://ui-avatars.com/api/?name=" + string);
  // },

  // Events
  //******************************** */

  // Gets the book with the given id
  getEvents: function(id) {
    return axios.get("/api/event/" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/event/" + id);
  },
  // Saves a book to the database
  saveEvent: function(eventData) {
    return axios.post("/api/event", eventData);
  }
};
