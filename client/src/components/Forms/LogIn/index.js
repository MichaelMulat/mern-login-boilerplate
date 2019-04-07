import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import API from "../../../utils/API";


class Login extends Component {
  state = {
    username: "",
    password: "",
    redirectTo: null
  };

  componentDidMount(){
      console.log("login props", this.props)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      if (this.state.username && this.state.password) {
          console.log("Handle Submit");
          API.loginUser({
              username: this.state.username,
              password: this.state.password
          })
              .then(res => {
                  console.log("user response", res.data);
                  if (res.status === 200) {
                      this.props.updateUser({
                          loggedIn: true,
                          username: res.data.username,
                          sessionId: res.data.sessionId,
                          firstName: res.data.userData.firstName,
                          lastName: res.data.userData.lastName
                      });
                      this.setState({
                        //   redirectTo: "/"
                      });
                  }
              })
              .catch(err => console.log(err));
      }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <main className="main-container">
          <Paper
            color="secondary"
            style={{
              maxWidth: "600px",
              margin: "20px auto",
              padding: "10px 20px"
            }}
          >
            <form className="">
              <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={this.handleInputChange}
                    fullWidth
                    name="username"
                    label="Username"
                    className="username"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={this.handleInputChange}
                    type="password"
                    fullWidth
                    name="password"
                    label="Password"
                    className=""
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Button
                    onClick={this.handleFormSubmit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="sign-in-button"
                    margin="normal"
                  >
                    Log In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </main>
      );
    }
  }
}

export default Login;
