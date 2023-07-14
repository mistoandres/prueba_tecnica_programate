import "./App.css";
import "./reset.css";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, useTheme } from "@mui/material";
import { darken } from "@mui/material";

import Header from "./Header";
import Sear from "./serch-input";
import { useSelector } from "react-redux";

function Search() {
  const [datos, setDatos] = useState([]);
  const globalTheme = useTheme();
  const busqueda = useSelector((state) => state.states.input);

  useEffect(() => {
    if (busqueda != "") {
      const url2 =
        "https://www.superheroapi.com/api.php/10227050996959862/search/" +
        busqueda;
      fetch(url2)
        .then((response) => response.json())
        .then((data) => {
          setDatos(data.results);
        });
    } else {
      setDatos([]);
      for (let i = 0; i < 731; i++) {
        const url1 =
          "https://superheroapi.com/api/10227050996959862/" + (i + 1);
        fetch(url1)
          .then((response) => response.json())
          .then((data) => {
            setDatos((current) => [...current, data]);
          });
      }
    }
  }, [busqueda]);

  const columns = useMemo(() => [
    {
      accessorKey: "name",
      header: "Name",
      size: 150,
    },
    {
      accessorKey: "powerstats.intelligence",
      header: "Powerstats Intelligence",
      size: 150,
    },
    {
      accessorKey: "powerstats.strength",
      header: "Powerstats Strength",
      size: 150,
    },
    {
      accessorKey: "powerstats.speed",
      header: "Powerstats Speed",
      size: 150,
    },
    {
      accessorKey: "powerstats.durability",
      header: "Powerstats Durability",
      size: 150,
    },
    {
      accessorKey: "powerstats.power",
      header: "Powerstats Power",
      size: 150,
    },
    {
      accessorKey: "powerstats.combat",
      header: "Powerstats Combat",
      size: 150,
    },
    
    {
      accessorKey: "appearance.gender",
      header: "Appearance Gender",
      size: 150,
    },
    {
      accessorKey: "appearance.race",
      header: "Appearance Race",
      size: 150,
    },
    {
      accessorKey: "appearance.height",
      header: "Appearance Height",
      size: 150,
    },
    {
      accessorKey: "appearance.weight",
      header: "Appearance Weight",
      size: 150,
    },
    {
      accessorKey: "appearance.eye-color",
      header: "Appearance Eye color",
      size: 150,
    },
    {
      accessorKey: "appearance.hair-color",
      header: "Appearance Hair color",
      size: 150,
    },
  ]);

  return (
    <Fragment>
      <Header />
      <Sear />
      <Box
        sx={{
          mx: "5rem",
        }}
      >
        <MaterialReactTable
          columns={columns}
          data={datos ? datos : []}
          muiTablePaperProps={{
            elevation: 0,
            sx: {
              borderRadius: "0",
              border: "1px dashed #e0e0e0",
            },
          }}
          muiTableBodyProps={{
            sx: (theme) => ({
              "& tr:nth-of-type(odd)": {
                backgroundColor: darken(theme.palette.background.default, 0.1),
              },
            }),
          }}
        />
      </Box>
    </Fragment>
  );
}
export default Search;
