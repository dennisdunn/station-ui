import { Button, Dialog, DialogActions, DialogContent, TextField } from "@material-ui/core";
import React, { useState } from "react";

export const PresetEditor = ({isOpen, onSave, onClose }) => {
  const [local, setLocal] = useState("");

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <TextField
          label="Station Label"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setLocal("");
            onClose();
          }}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            setLocal("");
            onClose();
            onSave(local);
          }}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
