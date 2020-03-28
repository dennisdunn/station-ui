import React, { useEffect, useState } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { callApi, SdrControl, StationInfo } from "./components";

function App() {
  const [station, setStation] = useState();
  const [sdr, setSdr] = useState();

  useEffect(() => {
    callApi({ url: "http://localhost:1881/api/sys/qth" }, ({ location }) =>
      setStation(location)
    );
  }, []);

  useEffect(() => {
    callApi({ url: "http://localhost:1882/api/sdrs/main" }, setSdr);
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Ground Station Control</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <StationInfo station={station} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid style={{ marginTop: "0.5em" }}>
        <Row>
          <Col xs={4}>
            <SdrControl
              {...sdr}
              onApply={setSdr}
              onRefresh={setSdr}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
