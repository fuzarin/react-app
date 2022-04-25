import React from "react";
import "./style.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div className="footer">
      <Container fixed>
        <Typography variant="body1" component="h2">
          Todos os direitos reservados a OpenDota.
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
