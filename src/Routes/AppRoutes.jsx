import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Heroes from "../Pages/Heroes";
import PrivateRoute from "./PrivateRoute";
import Players from "../Pages/Players";

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/heroes/:attr"
          element={
            <PrivateRoute>
              <Heroes />
            </PrivateRoute>
          }
        />
        <Route 
        exact
        path="/players"
        element={
          <PrivateRoute>
            <Players />
          </PrivateRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
