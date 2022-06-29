import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import React from "react";
import Widget from "./Components/Widget";

const App = () => {
  return (
    <div>
      <Widget />
      <AppRoutes />
    </div>
  );
};

export default App;
