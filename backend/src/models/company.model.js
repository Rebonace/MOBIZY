const { db } = require("./db");

async function getAllVehiclesFromCompany(companyId) {
  const [rows] = await db.query("SELECT * FROM vehicle WHERE company_id = ?", [
    companyId,
  ]);

  return [rows];
}

async function insertNewVehicle(vehicle, companyId) {
  const {
    model,
    brand,
    // eslint-disable-next-line camelcase
    photo_path,
    description,
    // eslint-disable-next-line camelcase
    date_of_purchase,
    fuel,
    kilometers,
    location,
    // eslint-disable-next-line camelcase
    nbr_seats,
    // eslint-disable-next-line camelcase
    is_ramp,
    // eslint-disable-next-line camelcase
    is_sonar,
    // eslint-disable-next-line camelcase
    is_sphere,
    gearbox,
    // eslint-disable-next-line camelcase
    daily_price,
    // eslint-disable-next-line camelcase
  } = vehicle;

  const [result] = await db.query(
    "INSERT INTO vehicle ( brand, model, photo_path, description, date_of_purchase, fuel, kilometers, location, nbr_seats, gearbox, is_ramp, is_sonar, is_sphere,  daily_price, company_id) VALUES ( ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?)",
    [
      brand,
      model,
      // eslint-disable-next-line camelcase
      photo_path,
      description,
      // eslint-disable-next-line camelcase
      date_of_purchase,
      fuel,
      kilometers,
      location,
      // eslint-disable-next-line camelcase
      nbr_seats,
      gearbox,
      // eslint-disable-next-line camelcase
      is_ramp,
      // eslint-disable-next-line camelcase
      is_sonar,
      // eslint-disable-next-line camelcase
      is_sphere,

      // eslint-disable-next-line camelcase
      daily_price,
      // eslint-disable-next-line camelcase
      companyId,
    ]
  );
  return result.insertId;
}

module.exports = { getAllVehiclesFromCompany, insertNewVehicle };
