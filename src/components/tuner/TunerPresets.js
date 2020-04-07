import {
  Button,
  ButtonGroup,
  Container,
  Icon,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { PresetEditor } from "./PresetEditor";

export const TunerPresets = ({ presets, onSelected, onNew }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const mkAddLabel = () => {
    return presets.length === 0 ? (
      <Typography variant="caption">
        <em>Add preset...</em>
      </Typography>
    ) : (
      <Icon>add</Icon>
    );
  };
  return (
    <Container>
      <ButtonGroup>
        {presets.map((preset, i) => (
          <Button
            key={i}
            variant="text"
            value={preset}
            onClick={() => onSelected(preset)}
          >
            {preset.label}
          </Button>
        ))}
        <Button key={99} variant="text" onClick={open}>
          {mkAddLabel()}
        </Button>
      </ButtonGroup>
      <PresetEditor isOpen={isOpen} onSave={onNew} onClose={close} />
    </Container>
  );
};
