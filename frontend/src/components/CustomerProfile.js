import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const CustomerProfile = (props) => {
    console.log(props)
    const { userReservation: { id, flight, seat, givenName, surname, email } } = props;
    console.log(email)
    return (

        <Wrapper>
            <ResInfo>
                <ConfTitle>{givenName} {surname}</ConfTitle> <br />
                <Bolded>Email: </Bolded>{email}
                <ConfTitle>current bookings:</ConfTitle><br />
                <Bolded>Reservation #: </Bolded>{id}<br />
                <Bolded>Flight #:</Bolded>  {flight}<br />
                <Bolded>Seat #: </Bolded>{seat}<br />

            </ResInfo>
        </Wrapper >


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

export default CustomerProfile;