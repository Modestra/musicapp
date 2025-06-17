"use client";

import { Grid, Paper, Toolbar, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { PageContainer } from "@toolpad/core/PageContainer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AppHeader } from "@/components/header/header";
import { useState } from "react";

function createData(
  author: string,
  title: string,
  views: number,
  favorite: boolean
) {
  return { author, title, views, favorite };
}

const rows = [
  createData("Shina", "Rainbow Factory", 5, true),
  createData("Александр Заречнев", "Сегодня", 2000, true),
  createData("Заречнев aka Саня", "Трудный возраст", 100500, true),
  createData("Cupcake", "Remix", 3.7, true),
];

export default function Home() {
  const [selectMusic, setSelectMusic] = useState({});

  return (
    <Box sx={{ flexGrow: 1, height: "93%" }}>
      <AppHeader></AppHeader>
      <Paper sx={{ p: 1, width: "100%", height: "100%" }}>
        <PageContainer>
          <Grid container>
            <Grid sx={{ height: "400px" }} size={12}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Избранная музяка
                  </Typography>
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
          </Grid>
        </PageContainer>
      </Paper>
    </Box>
  );
}
