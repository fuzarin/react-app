import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import LoginComponent from "../Components/LoginComponent/loginComponent";
import DashboardComponent from "../Components/DashboardComponent/dashboardComponent";

import { AuthProvider, AuthContext } from "../Context/Auth";
import HeroesComponent from "../Components/HeroesComponent/HeroesComponent";
import NavBarComponent from "../Components/NavBarComponent/NavBar";

export default function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <CircularProgress />;
    }

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
      <NavBarComponent />
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route
            exact
            path="/dashboard"
            element={
              <Private>
                <DashboardComponent />
              </Private>
            }
          />
          <Route
            exact
            path="/heroes/:attr"
            element={
              <Private>
                <HeroesComponent />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
