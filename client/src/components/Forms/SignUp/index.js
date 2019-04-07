import React, { Component } from "react";
import API from "../../../utils/API";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircleOutlined";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    imageUrl: "",
    redirectTo: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getAvatar(this.state.firstName)

    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.username &&
      this.state.password
    ) {
    
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
      })
        .then(res => {
          console.log(res);
          if (!res.data.errmsg) {
            console.log("Signup Successful!");
            this.setState({
              //redirect to login page
              redirectTo: "/"
            });
          } else {
            console.log("username already taken");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <main className="main-container">
        <Paper
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "10px 20px"
          }}
        >
          <Avatar
            className="avatar"
            style={{ backgroundColor: "#7B2463", marginBottom: "20px" }}
          >
            <AccountCircle style={{ color: "white" }} />
          </Avatar>
          <Typography component="h1">
            SIGN UP
          </Typography>
          <form className="">
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  // value={this.state.firstName}
                  onChange={this.handleInputChange}
                  fullWidth
                  name="firstName"
                  label="First Name"
                  className=""
                  margin="normal"
                  autoComplete="fname"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  // value={this.state.lastName}
                  onChange={this.handleInputChange}
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  className=""
                  margin="normal"
                  autoComplete="lname"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  // value={this.state.username}
                  onChange={this.handleInputChange}
                  fullWidth
                  name="username"
                  label="Username"
                  className=""
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="password"
                  // value={this.state.password}
                  onChange={this.handleInputChange}
                  fullWidth
                  name="password"
                  label="Password"
                  className=""
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  onClick={this.handleFormSubmit}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="sign-up-button"
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
    );
  }
}

export default SignUp;
