"use client";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import { setEdit, store } from "@/app/services/state.store";

const redirectToAuth = () => {};

export function AppHeader() {
  const [drugInDrop, setDrugInDrop] = useState(false);
  const onDrugCategories = () => {
    store.dispatch(setEdit());
    setDrugInDrop((drugInDrop) => !drugInDrop);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={"div"}
            sx={{
              flexGrow: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {process.env.NEXT_PUBLIC_APP_TITLE}
          </Typography>
          <div className="flex flex-row gap-4">
            <IconButton onClick={() => redirectToAuth()}>
              <DehazeIcon />
            </IconButton>
            <ToggleButton
              value="drugSelected"
              selected={drugInDrop}
              onChange={() => onDrugCategories()}
              color={"error"}
            >
              <DragIndicatorIcon />
            </ToggleButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
