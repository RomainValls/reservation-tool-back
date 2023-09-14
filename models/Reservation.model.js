const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reservationSchema = new Schema(
  {
    locataires: { type: String, required: true },
    arrivée: { type: Date, required: true },
    départ: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = model("Reservation", reservationSchema);
