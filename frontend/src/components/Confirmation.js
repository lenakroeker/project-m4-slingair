import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = (props) => {
  console.log(props)
  const { userReservation: { id, flight, seat, givenName, surname, email } } = props;
  console.log(email)
  return (

    <Wrapper>
      <ResInfo>
        <ConfTitle>Your flight is confirmed!</ConfTitle> <br />
        <Bolded>Reservation #: </Bolded>{id}<br />
        <Bolded>Flight #:</Bolded>  {flight}<br />
        <Bolded>Seat #: </Bolded>{seat}<br />
        <Bolded>Name: </Bolded>{givenName} {surname}<br />
        <Bolded>Email: </Bolded>{email}
      </ResInfo>
      <Img src={tombstone} width="200px"></Img>
    </Wrapper>


  )
};
const Wrapper = styled.div`
margin-top: 100px;`;

const ResInfo = styled.div`
width: 500px;
margin: auto;
border: 2px solid darkred;
padding: 20px;
line-height: 2.5em;`;

const ConfTitle = styled.div`
color: darkred;
padding-bottom: 10px;
margin-bottom:-25px;
font-size: 30px;
border-bottom: 2px solid darkred;
`

const Bolded = styled.span`
font-weight: bold;
`

const Img = styled.img`
width: 200px;
margin-left: calc(50vw - 100px);
margin-top: 50px;
`

export default Confirmation;
