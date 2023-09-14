const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Reservation = require("../models/Reservation.model");

router.post("/", async (req, res, next) => {
  try {
    const { locataires, arrivée, départ } = req.body;
    const reservation = await Reservation.create({
      locataires,
      arrivée,
      départ,
    });
    res.json(reservation);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allReservations = await Reservation.find();
    res.json(allReservations);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedReservation = await Reservation.findByIdAndDelete(id);
    res.json(deletedReservation);
    console.log(deletedReservation);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
