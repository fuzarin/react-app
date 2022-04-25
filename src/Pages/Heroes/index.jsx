import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import api from "../../services/api";
import _map from "lodash/map";
import _filter from "lodash/filter";
import { useParams } from "react-router-dom";
import AppHeader from "../../Components/AppHeader";
import "./style.css";
import Typography from "@mui/material/Typography";

const Heroes = () => {
  const [heroes, setHeroes] = useState();
  const [attrHeroes, setAttrHeroes] = useState();
  const { attr } = useParams();

  const mappedHeroes = (data) => {
    return _map(data, (item) => ({
      id: item.id,
      name: item.localized_name,
      attribute: item.primary_attr,
      attackType: item.attack_type,
      roles: item.roles,
    }));
  };

  useEffect(() => {
    if(attr === 'str') {
      setAttrHeroes('Força')
    } else if(attr === 'agi') {
      setAttrHeroes('Agilidade')
    } else if(attr === 'int') {
      setAttrHeroes('Inteligência')
    }
  }, [attr])

  const filteredHeroes = (heroes, attribute) =>
    _filter(heroes, (item) => item.attribute === attribute);

    console.log(attr);

  useEffect(() => {
    api
      .get("/heroStats")
      .then((res) => {
        const heroes = mappedHeroes(res.data);
        const heroesByAttribute = filteredHeroes(heroes, attr);
        setHeroes(heroesByAttribute);
      })
      .catch((err) => {
        console.log("error -> ", err);
      });
  }, [attr]);

  const columns = [
    {
      field: "name",
      headerName: "Nome do Herói",
      minWidth: 150,
    },
    {
      field: "attribute",
      headerName: "Atributo Primário",
      minWidth: 150,
    },
    {
      field: "attackType",
      headerName: "Tipo de Ataque",
      minWidth: 150,
    },
    {
      field: "roles",
      headerName: "Funções",
      minWidth: 150,
      flex: 1,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Typography className="headerMessage" variant="h4" component="h2">
        Heróis - {attrHeroes}
      </Typography>
      <Typography className="headerDescription" variant="subtitle1" component="h2">
        Listagem de heróis de {attrHeroes}.
      </Typography>
      <AppHeader />
      <DataGrid
        rows={heroes || []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        sx={{color: 'white'}}
        />
    </div>
  );
};

export default Heroes;
