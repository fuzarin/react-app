import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import Template from '../Components/Template';


const PrivateRoute = ({children}) => {
 if(!isAuthenticated()) {
  return <Navigate to="/login" replace />
 } 

 return <Template>{children}</Template>;
}

export default PrivateRoute;