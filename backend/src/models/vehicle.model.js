const { db } = require("./db");

async function getAll() {
  const [rows] = await db.query("SELECT * FROM vehicle");

  return rows;
}

async function getOne(vehicleId) {
  const [rows] = await db.query("SELECT * FROM vehicle WHERE id = ?", [
    vehicleId,
  ]);

  if (rows.length === 0) {
    return null;
  }

  return rows[0];
}

async function deleteVehicle(vehicleId) {
  const [rows] = await db.query("DELETE FROM vehicle WHERE id = ?", [
    vehicleId,
  ]);

  return [rows];
}

module.exports = {
  getAll,
  getOne,
  deleteVehicle,
};
