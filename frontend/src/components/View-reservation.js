import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const ViewReservation = (props) => {
    console.log(props)
    const { userReservation: { id, flight, seat, givenName, surname, email } } = props;
    console.log(email)
    return (

        <Wrapper>
            <ResInfo>
                <ConfTitle>Your Reservation</ConfTitle> <br />
                <Bolded>Reservation #: </Bolded>{id}<br />
                <Bolded>Flight #:</Bolded>  {flight}<br />
                <Bolded>Seat #: </Bolded>{seat}<br />
                <Bolded>Name: </Bolded>{givenName} {surname}<br />
                <Bolded>Email: </Bolded>{email}
            </ResInfo>
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


export default ViewReservation;