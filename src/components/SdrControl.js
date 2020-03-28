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
  const [freq, setFreq] = useState(props.freq);
  const [mode, setMode] = useState(props.mode);
  const [gain, setGain] = useState(props.gain);
  const [squelch, setSquelch] = useState(props.squelch);
  const [agc, setAgc] = useState(props.agc);

  return (
    <Form style={{ padding: "1em" }}>
      <Row>
        <Col>
          <Form.Label>Frequency (MHz)</Form.Label>
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="eg: 102.9"
            value={freq}
            onChange={e => setFreq(+e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Mode</Form.Label>
        </Col>
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
      </Row>
      <Row>
        <Col>
          <Form.Label>Squelch</Form.Label>
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="eg: 0 (off)"
            value={squelch}
            onChange={e => setSquelch(+e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Gain</Form.Label>
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="eg: 195 (19.5 db)"
            value={gain}
            onChange={e => setGain(+e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>AGC</Form.Label>
        </Col>
        <Col>
          <Form.Check
            inline
            type="checkbox"
            checked={agc === 1}
            label={agc === 1 ? "Enabled" : "Disabled"}
            onChange={e => setAgc(e.target.checked ? 1 : 0)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonToolbar className="justify-content-between">
            <ButtonGroup />
            <ButtonGroup>
              <Button
                disabled={!props.onRefresh}
                variant="secondary"
                onClick={props.onRefresh}
              >
                Refresh
              </Button>
              <Button
                disabled={!props.onApply}
                onClick={() =>
                  props.onApply({ freq, mode, squelch, gain, agc })
                }
              >
                Apply
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    </Form>
  );
};

/**
freq (./udpclient.py freq 101900000)

 mode (./udpclient.py mode 0 (for fm))
    0 = FM
    1 = AM
    2 = USB
    3 = LSB

squelch (./udpclient.py squelch 0)
    0 = OFF
    n = Value

gain (./udpclient.py gain auto)
    auto = Automatic
    n = Gainvalue; 195 = 19.5db

agc (./udpclient.py agc 1)
    0 = OFF
    1 = ON
 */
