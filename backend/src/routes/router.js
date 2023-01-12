const express = require("express");

const { vehicleRouter } = require("./vehicle.route");
const { companyRouter } = require("./company.route");

const router = express.Router();

router.use("/api/vehicles", vehicleRouter);
router.use("/api/companies", companyRouter);

module.exports = router;
