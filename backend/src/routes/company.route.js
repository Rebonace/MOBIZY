const { Router } = require("express");
const companyController = require("../controllers/company.controller");

const companyRouter = new Router();

companyRouter.get(
  "/:companyId/vehicles",
  companyController.listVehicleFromCompany
);
// companyRouter.get("/:id", companyController.get);

// companyRouter.post("/", companyController.create);

module.exports = {
  companyRouter,
};
