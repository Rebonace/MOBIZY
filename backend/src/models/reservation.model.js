const database = require("./db");

async function getAll() {
  const [rows] = await database.query("SELECT * FROM reservation");

  return rows;
}

async function getOne(reservationId) {
  const [rows] = await database.query(
    "SELECT * FROM reservation WHERE id = ?",
    [reservationId]
  );
  return rows[0];
}

async function insertOne(vehicleId, reservation) {
  const { startDate, endDate, userId } = reservation;
  const [result] = await database.query(
    "INSERT INTO reservation (start_date, end_date, user_id, vehicle_id) VALUES (?, ?, ?, ?)",
    [startDate, endDate, userId, vehicleId]
  );

  if (result.length === 0) {
    return null;
  }

  return result.insertId;
}

module.exports = {
  getAll,
  insertOne,
  getOne,
};
