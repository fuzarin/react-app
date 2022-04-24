import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AuthContext } from "../../Context/Auth";
import "./style.css";
import { useLocation } from "react-router-dom";

const NavBarComponent = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [titlePage, setTitlePage] = useState("");

  useEffect(() => {
    setTitlePage(location.pathname.substr(location.pathname.indexOf("/") + 1));
  }, [location]);

  useEffect(() => {
    if (user === null) {
      setTitlePage("Login");
    } else {
      setTitlePage(user.userName);
    }
  }, [user]);

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar position="static" className="appBarBg">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {titlePage}
        </Typography>
        {titlePage === "Login" ? null : (
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
