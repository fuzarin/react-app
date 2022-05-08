import React, { useEffect, useState } from "react";
// import "./style.css";
import CardHero from "../../Components/CardHero";
import api from "../../services/api";
import _uniqBy from "lodash/uniqBy";
import _map from "lodash/map";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const [attributes, setAttributes] = useState();
  const navigate = useNavigate();

  const userName = localStorage.getItem("accessToken");

  const mappedAttributes = (data) => {
    return _map(data, (item) => ({
      attribute: item.primary_attr,
    }));
  };

  useEffect(() => {
    api
      .get("/heroStats")
      .then((res) => {
        const heroesAttributes = mappedAttributes(res.data);
        setAttributes(_uniqBy(heroesAttributes, "attribute"));
      })
      .catch((err) => {
        console.log("error -> ", err);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      <Typography className="headerMessage" variant="h4" component="h2">
        Olá, {userName}! Seja bem-vindo ao OpenDota.
      </Typography>
      <Typography
        className="pt-4 pb-2 text-white w-full"
        variant="subtitle1"
        component="h2"
      >
        Aqui, trazemos para você todos os heróis do jogo Dota 2 filtrados por
        suas habilidades primárias.
      </Typography>
      {_map(attributes, (item) => (
        <CardHero
          key={item.attribute}
          onClick={() => {navigate(`/heroes/${item.attribute}`)}}
          attribute={item.attribute}
        />
      ))}
    </div>
  );
};

export default Dashboard;
