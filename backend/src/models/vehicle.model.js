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

async function getAllWithFilters(filters) {
  const {
    isRamp,
    isSonar,
    isSphere,
    dailyPrice,
    location,
    dateReservationStart,
    dateReservationEnd,
  } = filters;
  const locationPrecise = `%${location}%`;
  const [rows] = await db.query(
    "SELECT v.id, v.brand, v.model, v.model, v.photo_path, v.description, v.date_of_purchase, v.fuel, v.kilometers, v.location, v.nbr_seats, v.gearbox, v.is_ramp, v.is_sonar, v.is_sphere, v.gearbox, v.daily_price, v.company_id, a.start_date_1, a.start_date_2, a.end_date_1, a.end_date_2 FROM vehicle AS v " +
      "RIGHT JOIN availibility AS a ON a.vehicle_id_a = v.id " +
      "WHERE (v.is_ramp = ? AND v.is_sonar = ? AND v.is_sphere = ? AND v.daily_price < ? AND v.location LIKE ?) " +
      "AND ((? BETWEEN a.start_date_1 AND a.end_date_1 AND ? BETWEEN a.start_date_1 AND a.end_date_1) " +
      "OR (? BETWEEN a.start_date_2 AND a.end_date_2 AND ? BETWEEN a.start_date_2 AND a.end_date_2))",
    [
      isRamp,
      isSonar,
      isSphere,
      dailyPrice,
      locationPrecise,
      dateReservationStart,
      dateReservationEnd,
      dateReservationStart,
      dateReservationEnd,
    ]
  );

  return rows;
}

module.exports = {
  getAll,
  getOne,
  getAllWithFilters,
};
