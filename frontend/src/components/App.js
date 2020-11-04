import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import FlightSelect from "./SeatSelect/FlightSelect"
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import ViewReservation from "./View-reservation";
import CustomerProfile from "./CustomerProfile";
import Admin from "./Admin";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});
  const [madeReservation, setMadeReservation] = useState(false);

  const updateUserReservation = (newData) => {
    setUserReservation((userReservation) => { return { ...userReservation, ...newData } });
  };

  useEffect(() => {
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state
    const resId = localStorage.getItem("resId")
    console.log(resId)
    fetch(`/reservations/${resId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          updateUserReservation(res.data)
        }
      })

  }, [madeReservation]);

  console.log(userReservation)
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect madeReservation={madeReservation} setMadeReservation={setMadeReservation} />
          </Route>
          <Route exact path="/confirmation">
            <Confirmation userReservation={userReservation} />
          </Route>

          {/* my code */}

          <Route exact path="/view-reservation">
            <ViewReservation userReservation={userReservation} />
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>

          <Route exact path="/profile">
            <CustomerProfile userReservation={userReservation} />
          </Route>

          {/* my code */}
          <Route path="">404: Oops!</Route>
        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background: ${themeVars.background};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;
