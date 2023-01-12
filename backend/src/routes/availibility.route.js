const { Router } = require("express");
const availibilityController = require("../controllers/availibility.controller");

const availibilityRouter = new Router();

availibilityRouter.get("/:vehicleId", availibilityController.get);

module.exports = {
  availibilityRouter,
};
