import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Home from "./pages/Home";
import API from "./utils/API"
import theme from "./UI/theme"
import {
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Home from "./pages/Home";

class App extends Component {
  state = {
    loggedIn: false,
    username: null,
    firstName: null,
    lastName: null,
    sessionId: null 
    // redirect: null
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser = userObj => {
    this.setState(userObj);
  };

  getUser = () => {
    API.getUser().then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          sessionId: response.data.sessionId
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          firstName: null,
          lastName: null,
          sessionId: null
        });
      }
    });
  };

  logout = event => {
    event.preventDefault();
    API.logoutUser()
      .then(response => {
        // console.log(response.data);
        if (response.status === 200) {
          this.setState({
            loggedIn: false,
            username: null,
            firstName: null,
            lastName: null,
            sessionId: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error", error);
      });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <NavBar
              user={this.state}
              updateUser={this.updateUser}
              logout={this.logout}
            />
            <Switch>
              <Route
                path="/"
                render={() => (
                  <Home updateUser={this.updateUser} user={this.state} />
                )}
              />
              <Route
                path="/login"
                render={() => <Login updateUser={this.updateUser} />}
              />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
