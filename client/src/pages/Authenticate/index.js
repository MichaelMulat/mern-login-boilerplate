import React, { Component } from "react";
import Login from "../../components/Forms/LogIn";
import SignUp from "../../components/Forms/SignUp";

function Authenticate (props) {
    return (
      <div>
        <div>
          <Login
            {...props}
          />

          <SignUp {...props}/>
        </div>
      </div>
    );
  }

export default Authenticate;
