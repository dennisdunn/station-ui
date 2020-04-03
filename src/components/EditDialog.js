import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  DialogActions
} from "@material-ui/core";

export const EditDialog = ({ isOpen, onSave, onCancel, data, editor }) => {
  const [local, setLocal] = useState(data);

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        {React.cloneElement(editor, { data: local, onChange: setLocal })}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
