import React, { Component } from "react";
// import "./home.css";
import Authenticate from "../Authenticate";
import Welcome from "../Welcome";

// import Map from "../../components/Map";

function Home (props) {
  const { user } = props
  console.log("home props", props)
    
      if (user.loggedIn){
        return (
        <Welcome {...props} />
        )
      } else {
        return(
          <Authenticate {...props} />
        )
      }
}

export default Home;
