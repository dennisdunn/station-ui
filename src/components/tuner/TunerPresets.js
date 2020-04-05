import {
  Button,
  ButtonGroup,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Icon,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

export const TunerPresets = ({
  visible,
  presets,
  onSelected,
  onAddStation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [local, setLocal] = useState("");

  return visible ? (
    <Container>
      <FormControlLabel
        label={presets.label}
        labelPlacement="top"
        control={
          <ButtonGroup>
            {presets.stations.map((station, i) => (
              <Button
                key={i}
                variant="text"
                value={station}
                onClick={() => onSelected(station)}
              >
                {station.label}
              </Button>
            ))}
            <Button key={99} variant="text" onClick={() => setIsOpen(true)}>
              <Icon>add</Icon>
            </Button>
          </ButtonGroup>
        }
      />
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
              setIsOpen(false);
              setLocal("");
            }}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
              onAddStation(local);
              setLocal("");
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  ) : null;
};
