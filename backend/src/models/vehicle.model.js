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

// async function insertOne({ companyId, content }) {
//   const {
//     model,
//     brand,
//     description,
//     date_of_purchase,
//     fuel,
//     kilometers,
//     location,
//     nbr_seats,
//     is_ramp,
//     is_sonar,
//     is_sphere,
//     gearbox,
//     daily_price,
//     company_id,
//   } = content;
//   const [result] = await db.query(
//     "INSERT INTO comment (creation_date, content, user_id, idea_id) VALUES (NOW(), ?, ?, ?)",
//     [content, companyId]
//   );

//   return result.insertId;
// }

module.exports = {
  getAll,
  getOne,
};
