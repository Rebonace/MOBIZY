const database = require("./db");

async function getOne(vehicleId) {
  const [rows] = await database.query(
    "SELECT * FROM availibility WHERE vehicle_id_a = ?",
    [vehicleId]
  );
  return rows;
}

module.exports = {
  getOne,
};
