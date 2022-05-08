import React, { useEffect, useState } from "react";
import _map from "lodash/map";
import api from "../../services/api";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

const Players = () => {
 const [proPlayers, setProPlayers] = useState();

  const mappedProPlayers = (data) => {
    return _map(data, (item) => ({
      id: item.account_id,
      avatar: item.avatar,
      personaname: item.personaname,
      name: item.name,
      last_login: item.last_login,
    }));
  };

  useEffect(() => {
    api
      .get("/proPlayers")
      .then((res) => {
        const proPlayers = mappedProPlayers(res.data);
        setProPlayers(proPlayers);
      })
      .catch((err) => {
        console.log("error -> ", err);
      });
  }, []);

  const columns = [
   {
    field: 'avatar',
    headerName: '',
    width: 80,
    editable: true,
    renderCell: (params) => <img src={params.value} alt="teste" />,
  },
   {
     field: "name",
     headerName: "Nome do Herói",
     minWidth: 150,
   },
   {
     field: "personaname",
     headerName: "Nome do Personagem",
     minWidth: 180,
   },
   {
     field: "last_login",
     headerName: "Último Login",
     minWidth: 150,
   }
 ];

 return (
   <div style={{ height: 400, width: "100%" }}>
     <Typography className="headerMessage" variant="h4" component="h2">
       Pro Players
     </Typography>
     <Typography
       className="headerDescription"
       variant="subtitle1"
       component="h2"
     >
       Listagem de Jogadores profissionais de Dota 2.
     </Typography>
     <DataGrid
       rows={proPlayers || []}
       columns={columns}
       pageSize={5}
       rowsPerPageOptions={[5]}
       disableSelectionOnClick
       sx={{ color: "white" }}
     />
   </div>
 );
};

export default Players;
