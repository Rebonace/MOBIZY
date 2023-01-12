const companyModel = require("../models/company.model");

async function listVehicleFromCompany(req, res) {
  const vehicles = await companyModel.getAllVehiclesFromCompany(
    req.params.companyId
  );
  res.json(vehicles);
}

async function createNewVehicle(req, res) {
  if (!req.body) {
    res.sendStatus(400);
    return;
  }

  const insertId = await companyModel.insertNewVehicle(
    req.body,
    req.params.companyId
  );
  res.status(201).json({ "vehicle created": insertId });
}

module.exports = {
  listVehicleFromCompany,
  createNewVehicle,
};
