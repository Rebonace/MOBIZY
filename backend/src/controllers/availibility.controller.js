const availibilityModel = require("../models/availibility.model");

async function get(req, res) {
  if (!req.params.vehicleId) {
    res.sendStatus(400);
    return;
  }

  const availibility = await availibilityModel.getOne(req.params.vehicleId);

  if (!availibility) {
    res.sendStatus(404);
    return;
  }

  res.json(availibility);
}

module.exports = {
  get,
};
