import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import './style.css';
import { register } from "../../auth";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDataRegister = { name, email, password };

    register(userDataRegister);
  };

  const useStyles = makeStyles((theme) => ({
    textField: {
      border: "1px solid white",
      borderRadius: "4px",
      color: "white",
    },
  }));

  const classes = useStyles();
  return (
    <Container className="boxRegister" maxWidth="sm" sx={{ pt: 5 }}>
     <img
        className="logo"
        src="../../../assets/png/logo.png"
        alt="Dota 2 Logo"
      />
      <form className="formRegister" onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            className={classes.textField}
            sx={{ width: "100%", mt: 2, mb: 1 }}
            id="name"
            label="Seu Nome"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            className={classes.textField}
            sx={{ width: "100%", mt: 2, mb: 1 }}
            id="email"
            label="Seu email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            className={classes.textField}
            sx={{ width: "100%", mt: 1, mb: 2 }}
            id="password"
            label="Sua Senha"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button className="buttonRegister" type="submit" sx={{ width: "100%" }} variant="contained">
            Cadastrar
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default RegisterComponent;
