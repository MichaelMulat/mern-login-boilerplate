import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Button, Paper, Icon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AccountCircle from '@material-ui/icons/AccountCircle';


function Welcome (props) {
    console.log("Welcome page: ", props)

    const { user } = props;

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={3}>
            <Paper>
              <Icon>
                <AccountCircle />
              </Icon>
              <Typography>
                  {user.firstName} {user.lastName}
              </Typography>
              Hi, You are finally logged in
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}

export default Welcome;