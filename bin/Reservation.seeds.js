// bin/seeds.js

const mongoose = require("mongoose");
const Reservation = require("../models/Reservation.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Calendrier-barbatre";

const reservations = [
  [
    {
      locataires: "Mamie",
    },
  ],
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Reservation.create(reservations);
  })
  .then((reservationsFromDB) => {
    console.log(`Created ${reservationsFromDB.length} reservations`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log("DB connection closed!");
  })
  .catch((err) => {
    console.log(`An error occurred while creating books from the DB: ${err}`);
  });
