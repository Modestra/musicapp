import { Grid, Paper, Skeleton, Toolbar } from "@mui/material";
import { PageContainer } from "@toolpad/core/PageContainer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const there = createTheme({});

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, height: "93%" }}>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <Paper sx={{ p: 1, width: "100%", height: "100%" }}>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </Paper>
    </Box>
  );
}
