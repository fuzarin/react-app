import React, { useState, useContext } from "react";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./style.css";
import { AuthContext } from '../../Context/Auth';

export default function LoginComponent() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userName, password);
  };

  const { login } = useContext(AuthContext);

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <form className="formLogin">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "100%", mt: 2, mb: 1 }}
            id="user"
            label="Usuário"
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
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
          <Button
            onClick={handleSubmit}
            sx={{ width: "100%" }}
            variant="contained"
          >
            Entrar
          </Button>
        </Box>
      </form>
    </Container>
  );
}
