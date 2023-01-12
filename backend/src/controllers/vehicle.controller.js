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

async function deleteOne(req, res) {
  const vehicle = await vehicleModel.deleteVehicle(req.params.vehicleId);

  if (!vehicle) {
    res.status(404).send("vehicle not found in database");
  }

  res.status(201).send("Vehicle deleted from database");
}

async function modify(req, res) {
  const vehicle = await vehicleModel.updateVehicle(req.params.vehicleId);

  if (!vehicle) {
    res.status(404).send("vehicle not found in database");
  }

  res.status(201).send("Vehicle deleted from database");
}

module.exports = {
  list,
  get,
  deleteOne,
  modify,
};
