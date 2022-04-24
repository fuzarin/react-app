import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import api from "../../services/api";
import _map from "lodash/map";
import _filter from "lodash/filter";
import {useParams} from 'react-router-dom';

const HeroesComponent = () => {
  const [heroes, setHeroes] = useState();
  const {attr} = useParams();

  const mappedHeroes = (data) => {
    return _map(data, (item) => ({
      id: item.id,
      name: item.localized_name,
      attribute: item.primary_attr,
      attackType: item.attack_type,
      roles: item.roles,
    }));
  };

  const filteredHeroes = (heroes, attribute) =>
    _filter(heroes, (item) => item.attribute === attribute);

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
      width: 460,
      editable: true,
    },
    {
      field: "attribute",
      headerName: "Atributo Primário",
      width: 460,
      editable: true,
    },
    {
      field: "attackType",
      headerName: "Tipo de Ataque",
      width: 460,
      editable: true,
    },
    {
      field: "roles",
      headerName: "Funções",
      width: 460,
      editable: true,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={heroes || []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default HeroesComponent;
