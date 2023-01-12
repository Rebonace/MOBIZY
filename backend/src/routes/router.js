const express = require("express");

const { vehicleRouter } = require("./vehicle.route");
const { companyRouter } = require("./company.route");
const { reservationRouter } = require("./reservation.route");
const { availibilityRouter } = require("./availibility.route");

const router = express.Router();

router.use("/api/vehicles", vehicleRouter);
router.use("/api/companies", companyRouter);
router.use("/api/reservations", reservationRouter);
router.use("/api/availibility", availibilityRouter);

module.exports = router;
