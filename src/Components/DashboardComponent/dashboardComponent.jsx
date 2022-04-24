import React, { useEffect, useState } from "react";
import "./style.css";
import Container from "@mui/material/Container";
import CardComponent from "../CardComponent/CardComponent";
import api from "../../services/api";
import _uniqBy from "lodash/uniqBy";
import _map from "lodash/map";
import { useNavigate } from "react-router-dom";

export default function DashboardComponent() {
  const [attributes, setAttributes] = useState();
  const navigate = useNavigate();

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
    <Container sx={{pt:4}} maxWidth="lg" className="cardContainer">
      {_map(attributes, (item) => (
        <CardComponent
        key={item.attribute}
          onClick={() => navigate(`/heroes/${item.attribute}`)}
          attribute={item.attribute}
        />
      ))}
    </Container>
  );
}
