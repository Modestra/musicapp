"use client";

import ToggleButton from "@mui/material/ToggleButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { categoryService } from "@/app/services/categoryList.service";

export function AddCategory() {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  return (
    <>
      {!edit ? (
        <div className="w-full h-12 flex flex-row justify-center">
          <ToggleButton
            value="edit"
            selected={edit}
            onChange={() => setEdit((edit) => !edit)}
            color="success"
          >
            <AddIcon fontSize="large" color="success"></AddIcon>
          </ToggleButton>
        </div>
      ) : (
        <div className="w-full h-12 flex flex-row">
          <div className="flex flex-row self-center grow gap-2">
            <TextField
              id="text-title"
              label="Название"
              variant="outlined"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <Button onClick={() => categoryService.createTemplate(text)}>
              <AddIcon fontSize="large" color="success" />
            </Button>
          </div>
          <ToggleButton
            value="edit"
            selected={edit}
            onChange={() => setEdit((edit) => !edit)}
          >
            <RemoveIcon fontSize="large" color="error" />
          </ToggleButton>
        </div>
      )}
    </>
  );
}
