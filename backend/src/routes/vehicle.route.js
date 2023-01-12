const { Router } = require("express");
const vehicleController = require("../controllers/vehicle.controller");

const vehicleRouter = new Router();

vehicleRouter.get("/", vehicleController.list);
vehicleRouter.get("/:vehicleId", vehicleController.get);

// vehicleRouter.post("/", vehicleController.create);

module.exports = {
  vehicleRouter,
};
