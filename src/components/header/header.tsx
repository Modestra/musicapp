"use client";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { AppDialog, DialogConfig } from "../dialog/dialog";
import { useState } from "react";

const closeDialog = () => {};

export function AppHeader() {
  const [open, setOpen] = useState(false);

  const dialogConfig: DialogConfig = {
    title: "Мои аккаунты",
  };
  return (
    <>
      <AppDialog
        open={open}
        onClose={closeDialog}
        config={dialogConfig}
      ></AppDialog>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Music API
          </Typography>
          <IconButton onClick={() => setOpen(!open)}>
            <DehazeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
