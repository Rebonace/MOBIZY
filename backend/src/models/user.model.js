const database = require("./db");

// async function getOneUser(id) {
//   const sql = "select email,firstname,lastname from user where id = ?";
//   const sqlParams = [id];

//   const [users] = await database.query(sql, sqlParams);
//   if (users.length > 0) {
//     return users[0];
//   }
//   throw new Error("Error");
// }

async function getUserByEmail(email) {
  const sql =
    "select email, hashed_password from user where email = ?";
  const sqlParams = [email];

  const [userInfo] = await database.query(sql, sqlParams);
  if (userInfo) {
    return userInfo[0];
  }
  throw new Error("No user with this email");
}

async function getAllUsers() {
  const sql =
    "select email, firstname, lastname, role, licence, description from user join individual on individual.user_id = user_id";
  const sqlParams = [];

  const [users] = await database.query(sql, sqlParams);
  if (users) {
    return users;
  }
  throw new Error("Error");
}

async function postUser(email, description, hashedPassword) {
    const sql =
      "INSERT INTO user(email, description, hashed_password) VALUES (?, ?, ?)";
    const sqlParams = [email, description, hashedPassword];
    const [result] = await database.query(sql, sqlParams);
    if (result.affectedRows) {
      return result.insertId;
    }
    throw new Error();
  }

  async function postIndividual(firstname, lastname, licence, userId) {
    const sql =
      "INSERT INTO individual(firstname, lastname, licence, user_id) VALUES (?, ?, ?, ?)";
    const sqlParams = [firstname, lastname, licence, userId];
    const [result] = await database.query(sql, sqlParams);
    if (result.affectedRows) {
      return result.insertId;
    }
    throw new Error();
  }

module.exports = {
//   getOneUser,
  getAllUsers,
  postUser,
  getUserByEmail,
  postIndividual
};
