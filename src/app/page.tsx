"use client";

import { Grid, Paper, Box } from "@mui/material";
import { PageContainer } from "@toolpad/core/PageContainer";
import { AppHeader } from "@/components/header/header";
import { CategoryList } from "@/components/categoryList/categoryList";
import {
  categoryService,
  Subscriber,
} from "@/app/services/categoryList.service";

export default function Home() {
  //const [category, setCategory] = useState<CategoryTemplate[]>();

  return (
    <Box sx={{ flexGrow: 1, height: "93%" }}>
      <AppHeader></AppHeader>
      <Paper sx={{ p: 1, width: "100%", height: "100%" }}>
        <PageContainer>
          <Grid container>
            <CategoryList></CategoryList>
          </Grid>
        </PageContainer>
      </Paper>
    </Box>
  );
}
