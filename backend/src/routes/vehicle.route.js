const { Router } = require("express");
const vehicleController = require("../controllers/vehicle.controller");

const vehicleRouter = new Router();

vehicleRouter.get("/", vehicleController.list);
vehicleRouter.post("/filter", vehicleController.listWithFilters);
vehicleRouter.get("/:vehicleId", vehicleController.get);
vehicleRouter.delete("/:vehicleId/delete", vehicleController.deleteOne);

module.exports = {
  vehicleRouter,
};
