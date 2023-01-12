const vehicleModel = require("../models/vehicle.model");

async function list(req, res) {
  const vehicles = await vehicleModel.getAll();
  res.json(vehicles);
}

async function get(req, res) {
  if (!req.params.vehicleId) {
    res.sendStatus(400);
    return;
  }

  const vehicle = await vehicleModel.getOne(req.params.vehicleId);

  if (!vehicle) {
    res.sendStatus(404);
    return;
  }

  res.json(vehicle);
}

async function listWithFilters(req, res) {
  const vehicles = await vehicleModel.getAllWithFilters(req.body);
  res.json(vehicles);
}

module.exports = {
  list,
  get,
  listWithFilters,
};
