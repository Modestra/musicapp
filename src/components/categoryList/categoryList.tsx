"use client";
import { Grid, Paper, Toolbar, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { AddCategory } from "./addCategory";
import { store } from "@/app/services/state.store";

export type CategoryTemplate = {
  title: string;
  tableId: string;
  columns: Array<{ name: string; columnTitle: string }>;
};

function createData(
  author: string,
  title: string,
  views: number,
  favorite: boolean
) {
  return { author, title, views, favorite };
}

const favoriteCatalog: CategoryTemplate = {
  title: "Избранная музяка",
  tableId: "",
  columns: [
    {
      name: "Автор",
      columnTitle: "author",
    },
    {
      name: "Название",
      columnTitle: "title",
    },
    {
      name: "Просмотры",
      columnTitle: "views",
    },
    {
      name: "В подписках",
      columnTitle: "favorite",
    },
  ],
};
const rows = [
  createData("Shina", "Rainbow Factory", 5, true),
  createData("Александр Заречнев", "Сегодня", 2000, true),
  createData("Заречнев aka Саня", "Трудный возраст", 100500, true),
  createData("Cupcake", "Remix", 3.7, true),
];

export function CategoryList() {
  const [calegoryList] = useState<CategoryTemplate[]>([favoriteCatalog]);
  store.subscribe(() => {
    console.log("Состояние обновлено", store.getState());
  });
  return (
    <>
      {calegoryList.map((table, index) => (
        <Grid sx={{ height: "400px" }} size={12} key={index}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {table.title}
              </Typography>
              <IconButton color="inherit">
                <DeleteIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {table.columns.map((columns, index) => (
                    <TableCell key={index}>{columns.name}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.author}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.views}</TableCell>
                    <TableCell align="right">{row.favorite}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ))}
      <AddCategory />
    </>
  );
}
