"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  res.status(200).json({
    status: 200,
    data: Object.keys(flights)
  })
};

const getFlight = (req, res) => {
  const flightNum = req.params.flightNum;
  if (flights[flightNum]) {
    res.status(200).json({
      status: 200,
      data: flights[flightNum]
    })
  } else {
    res.status(400).json({
      status: 400,
      message: `Error. ${flightNum} is not a valid flight number`
    })
  }
};

const addReservations = (req, res) => {

  const { data: { flight, seat, givenName, surname, email } } = req.body;
  const emailRegex = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/;
  console.log(req.body)
  if (email) {
    console.log("meow")
    const newReservation = {
      id: uuidv4(),
      flight: flight,
      seat: seat,
      givenName: givenName,
      surname: surname,
      email: email,
    }

    reservations.push(newReservation)
    res.status(200).json({ status: 201, id: newReservation.id })
  } else {
    console.log("Hi")
    res.status(400).json({ "status": 400, error: "reservation error" })
  }
};

const getReservations = (req, res) => {
  res.status(200).json({
    status: 200,
    data: reservations,
  })
};

const getSingleReservation = (req, res) => {
  const reservationId = req.params.reservationId;

  const reservation = reservations.find((reser) => { return reser.id == reservationId });
  if (typeof reservation === "object") {
    res.status(200).json({
      status: 200,
      data: reservation
    })
  } else {
    res.status(400).json({
      status: 400,
      message: `Error. ${reservationId} is not a valid reservationid`
    })
  }
};

const deleteReservation = (req, res) => {
  const reservationId = req.params.reservationId;
  const reservation = reservations.find((reser) => { return reser.id == reservationId });
  if (typeof reservation === "object") {
    const index = reservations.indexOf(reservation);
    reservations.splice(index, 1)
    res.status(200).json({
      status: 200,
      message: `reservation ${reservationId} has been deleted`,
    })
  } else {
    res.status(400).json({
      status: 400,
      message: `Error. ${reservationId} is not a valid reservationid`
    })
  }
};

const updateReservation = (req, res) => {
  //id of reservation
  const reservationId = req.params.reservationId;
  // get reservation by id
  const reservation = reservations.find((reser) => { if (reser.id == reservationId) return reser });
  if (typeof reservation === "object") {
    const index = reservations.indexOf(reservation);
    if (req.body.flight) reservations[index].flight = req.body.flight;
    if (req.body.seat) reservations[index].seat = req.body.seat;
    if (req.body.givenName) reservations[index].givenName = req.body.givenName;
    if (req.body.surname) reservations[index].surname = req.body.surname;
    if (req.body.email) reservations[index].email = req.body.email;
    res.status(200).json({
      status: 200,
      message: `reservation ${reservationId} has been updated `,
    })
  } else {
    res.status(400).json({
      status: 400,
      message: `Error. ${reservationId} is not a valid reservationid`
    })
  }
};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
