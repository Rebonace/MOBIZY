const { db } = require("./db");

async function getAllVehiclesFromCompany(companyId) {
  const [rows] = await db.query("SELECT * FROM vehicle WHERE company_id = ?", [
    companyId,
  ]);

  return [rows];
}

module.exports = { getAllVehiclesFromCompany };
