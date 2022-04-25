import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./style.css";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { logout } from '../../auth';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" className="appBarBg">
      <Container fixed>
        <Toolbar className="boxHeader">
          <Typography
            className="logoPage"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            OpenDota
          </Typography>

          <ul className="menuApp">
            <li className="menuItem" onClick={() => navigate(`/dashboard`)}>Dashboard</li>
          </ul>

          <Button className="logouButton" onClick={logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
