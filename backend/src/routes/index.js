const { Router } = require("express");

const { vehicleRouter } = require("./vehicleRoute");

const router = new Router();

router.use("/", vehicleRouter);
// router.use("/",);

module.exports = { router };
