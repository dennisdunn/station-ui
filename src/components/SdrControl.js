import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  Form,
  Row
} from "react-bootstrap";

export const SdrControl = props => {
  const [squelch, setSquelch] = useState(props.squelch);
  const [freq, setFreq] = useState(props.freq);
  const [mode, setMode] = useState(props.mode);
  const [gain, setGain] = useState(props.gain);
  const [agc, setAgc] = useState(props.agc);

  return (
    <fieldset>
      <legend>SDR Settings</legend>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column="sm" xs={3}>
            Freq (MHz)
          </Form.Label>
          <Col>
            <Form.Control
              type="number"
              placeholder="eg: 102.9"
              value={freq}
              onChange={e => setFreq(+e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column="sm" xs={3}>
            Mode
          </Form.Label>
          <Col>
            <Form.Check
              inline
              type="radio"
              label="FM"
              value={0}
              checked={mode === 0}
              onChange={e => setMode(+e.target.value)}
            />
            <Form.Check
              inline
              type="radio"
              label="AM"
              value={1}
              checked={mode === 1}
              onChange={e => setMode(+e.target.value)}
            />
            <Form.Check
              inline
              type="radio"
              label="LSB"
              value={2}
              checked={mode === 2}
              onChange={e => setMode(+e.target.value)}
            />
            <Form.Check
              inline
              type="radio"
              label="USB"
              value={3}
              checked={mode === 3}
              onChange={e => setMode(+e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column="sm" xs={3}>
            Squelch
          </Form.Label>
          <Col>
            <Form.Control
              type="number"
              placeholder="eg: 0 (off)"
              value={squelch}
              onChange={e => setSquelch(+e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column="sm" xs={3}>
            Gain
          </Form.Label>
          <Col>
            <Form.Control
              type="number"
              placeholder="eg: 195 (19.5 db)"
              value={gain}
              onChange={e => setGain(+e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column="sm" xs={3}>
            AGC
          </Form.Label>
          <Col>
            <Form.Check
              inline
              label={agc === 1 ? "Enabled" : "Disabled"}
              type="checkbox"
              checked={agc === 1}
              onChange={e => setAgc(e.target.checked ? 1 : 0)}
            />
          </Col>
        </Form.Group>
      </Form>
      <ButtonToolbar className="justify-content-between">
        <ButtonGroup />
        <ButtonGroup>
          <Button
            size="sm"
            disabled={!props.onRefresh}
            variant="secondary"
            onClick={props.onRefresh}
          >
            Reset
          </Button>
          <Button
            size="sm"
            disabled={!props.onApply}
            onClick={() => props.onApply({ freq, mode, squelch, gain, agc })}
          >
            Save
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </fieldset>
  );
};
