import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Container from '@mui/material/Container';

const Template = (props) => {
  return (
    <>
      <NavBar />
      <Container fixed>{props.children}</Container>
      <Footer />
    </>
  );
};

export default Template;
