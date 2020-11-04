import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Admin = () => {
    const [all, setAll] = useState([]);

    useEffect(() => {
        fetch(`/reservations`)
            .then(res => res.json())
            .then(res => setAll(res.data))
            .then(res => console.log(res))

        // TODO: get seating data for selected flight
    }, []);


    console.log(all[0])
    return (


        <Wrapper><Head> All Reservations</Head>
            {all.map((reserv) =>
                <>
                    <IdBox>
                        Reservation ID: {reserv.id}
                    </IdBox>
                    <DataBox>
                        Name: {reserv.givenName} {reserv.surname}  |  Email: {reserv.email}
                    </DataBox>
                    <DataBox>
                        Flight: {reserv.flight}
                    </DataBox>
                    <DataBox>
                        Seat: {reserv.seat}
                    </DataBox>

                </>)}
        </Wrapper>)
};

const Wrapper = styled.div`
margin: auto;
margin-bottom: 50px;
width: 800px;`
const DataBox = styled.div`
border: 1px solid black;
padding: 5px 100px;
background: orange;
`
const IdBox = styled.div`
border: 1px solid darkred;
background: red;
font-weight: bold;
padding: 10px 100px`

const Head = styled.h2`
padding: 20px;`

export default Admin;