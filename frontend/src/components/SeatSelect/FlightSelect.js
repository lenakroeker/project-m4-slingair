import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect, flightNumber }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/flights')
      .then(res => res.json())
      .then(res => setFlights(res.data))

  }, []);

  console.log(flights)


  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>

      <Select value={flightNumber} onChange={handleFlightSelect}>
        <option>Select Flight</option>
        {flights.map((flight, y) => <option key={y}>{flight}</option>)}
      </Select>

      {/* TODO: Create a dropdown from the flight numbers */}
    </Wrapper >
  );
};

const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;

const Select = styled.select`
width: 100px;
margin-left: 20px;
height:30px;`

export default FlightSelect;
