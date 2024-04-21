const express = require("express");
const router = express.Router();
const ReservationController = require("../Controller/reservationController");

router.post("/", ReservationController.createReservation);
router.get("/", ReservationController.getAllReservations);
router.get("/user/:userId", ReservationController.getReservationsByUser);
router.get("/user/:userId/withEvents", ReservationController.getReservationsWithEventsByUser);
router.put("/update/:id/:event",ReservationController.updateReservation);

module.exports = router;
