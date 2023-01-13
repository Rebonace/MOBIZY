const { Router } = require("express");
const vehicleController = require("../controllers/vehicle.controller");
const reservationController = require("../controllers/reservation.controller");

const vehicleRouter = new Router();

vehicleRouter.get("/", vehicleController.list);
vehicleRouter.post("/filter", vehicleController.listWithFilters);
vehicleRouter.get("/:vehicleId", vehicleController.get);
vehicleRouter.delete("/:vehicleId/delete", vehicleController.deleteOne);
vehicleRouter.post("/:vehicleId/reserved", reservationController.create);

module.exports = {
  vehicleRouter,
};
