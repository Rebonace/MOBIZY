const reservationModel = require("../models/reservation.model");

async function list(req, res) {
  const reservations = await reservationModel.getAll();
  res.json(reservations);
}

async function get(req, res) {
  if (!req.params.reservationId) {
    res.sendStatus(400);
    return;
  }

  const reservation = await reservationModel.getOne(req.params.reservationId);
  if (!reservation) {
    res.sendStatus(404);
    return;
  }
  res.json(reservation);
}

async function create(req, res) {
  if (!req.body) {
    res.sendStatus(400);
    return;
  }

  const insertId = await reservationModel.insertOne(
    req.params.vehicleId,
    req.body
  );

  res.status(201).json({ insertId });
}

module.exports = {
  list,
  create,
  get,
};
