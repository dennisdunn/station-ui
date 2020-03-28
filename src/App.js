import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { callApi, SdrControl, StationInfo } from "./components";

function App() {
  const [station, setStation] = useState(null);
  const [sdr, setSdr] = useState(null);

  useEffect(() => {
    callApi("http://localhost:1881/api/sys/qth", data =>
      setStation(data.location)
    );
    callApi("http://localhost:1882/api/sdrs/main", setSdr);
  }, [station, sdr]);

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
      <SdrControl {...sdr} />
    </div>
  );
}

export default App;
