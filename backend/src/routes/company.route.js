const { Router } = require("express");
const companyController = require("../controllers/company.controller");

const companyRouter = new Router();

companyRouter.get(
  "/:companyId/vehicles",
  companyController.listVehicleFromCompany
);

companyRouter.post("/:companyId/create", companyController.createNewVehicle);

module.exports = {
  companyRouter,
};
