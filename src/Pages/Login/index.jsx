import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./style.css";
import { login } from "../../auth";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "1px solid white",
    borderRadius: "4px",
    color: 'white'
  },
}));

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, password };

    login(userData);
  };

  return (
    <Container className="boxLogin" maxWidth="sm" sx={{ pt: 5 }}>
      <img
        className="logo"
        src="../../../assets/png/logo.png"
        alt="Dota 2 Logo"
      />
      <form className="formLogin" onSubmit={handleSubmit}>
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
            id="user"
            label="Usuário"
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
            sx={{ width: "100%", mt: 1, mb: 2 }}
            id="password"
            label="Senha"
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
          <Button className="buttonLogin" type="submit" sx={{ width: "100%" }} variant="contained">
            Entrar
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
