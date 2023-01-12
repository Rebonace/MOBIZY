const companyModel = require("../models/company.model");

async function listVehicleFromCompany(req, res) {
  const vehicles = await companyModel.getAllVehiclesFromCompany(
    req.params.companyId
  );
  res.json(vehicles);
}

// async function getOneVehicleFromCompany(req, res) {
// if(!req.params.id){
//     res.sendStatus(400);
//     return;
// }
// const vehicle = await vehicleModel.getOne(req.params.id);
//   if (!vehicle) {
//     res.sendStatus(404);
//     return;
//   }
//   res.json(vehicle);
// }
// async function get(req, res) {
//   if (!req.params.id) {
//     res.sendStatus(400);
//     return;
//   }

//   const vehicle = await vehicleModel.getOne(req.params.id);

//   if (!vehicle) {
//     res.sendStatus(404);
//     return;
//   }

//   res.json(vehicle);
// }

// async function create(req, res) {
//   if (!req.body) {
//     res.sendStatus(400);
//     return;
//   }
//   const insertId = await vehicleModel.insertOne(req.body);
//   res.status(201).json({ "vechicle created": insertId });
// }

module.exports = {
  listVehicleFromCompany,
};
