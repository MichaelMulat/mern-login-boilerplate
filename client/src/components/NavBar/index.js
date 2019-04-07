import React from "react";
import AppBar from "@material-ui/core/AppBar";
// import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircleOutlined";
// import API from "../../utils/API"
function NavBar(props) {
  const { logout, user } = props;
  console.log("Nav props", props);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant="h6" color="inherit">
            mern login boilerplate
          </Typography>
          
          {/* Display Logout button if logged in */}
          {user.loggedIn && <div>
            <Button color="inherit">
              <Typography variant="subtitle1" color="inherit">
                {user.firstName} {user.lastName}
              </Typography>
              <AccountCircle style={{ color: "white" }} />
            </Button>

            <Button onClick={logout}
            color="inherit">Log out</Button>
          </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
