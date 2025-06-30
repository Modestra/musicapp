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
import {
  categoryService,
  Subscriber,
} from "@/app/services/categoryList.service";
import { useState } from "react";

export type CategoryTemplate = {
  title: string;
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

const category: CategoryTemplate = {
  title: "Избранная музяка",
  columns: [
    {
      name: "Автор",
      columnTitle: "author",
    },
    {
      name: "Автор",
      columnTitle: "author",
    },
    {
      name: "Автор",
      columnTitle: "author",
    },
    {
      name: "Автор",
      columnTitle: "author",
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
  const [calegoryList, setCalegoryList] = useState<CategoryTemplate[]>();
  categoryService.subscribe(new Subscriber("CategoryList"));
  categoryService.addCategory(category);

  return (
    <>
      <Grid sx={{ height: "400px" }} size={12}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Избранная музяка
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
                <TableCell>Автор</TableCell>
                <TableCell align="right">Название</TableCell>
                <TableCell align="right">Просмотры</TableCell>
                <TableCell align="right">В подписках</TableCell>
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
    </>
  );
}
