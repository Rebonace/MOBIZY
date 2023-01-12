const {
  getOneUser,
  getAllUsers,
  postUser,
  postIndividual,
  postCompany,
} = require("../models/user.model");

const getAllUser = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.sendStatus(404);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await getOneUser(parseInt(req.params.id, 10));
    res.json(user);
  } catch (err) {
    res.sendStatus(404);
  }
};

const createIndividual = async (req, res) => {
  const { email, description, hashedPassword, firstname, lastname, licence } =
    req.body;
  try {
    const userId = await postUser(email, description, hashedPassword);
    const individualId = await postIndividual(
      firstname,
      lastname,
      licence,
      userId
    );
    res.json(individualId);
  } catch (err) {
    console.error(err);
    res.status(405).send("Failed to create user");
  }
};

const createCompany = async (req, res) => {
  const { email, name, hashedPassword, description } = req.body;
  try {
    const userId = await postUser(email, description, hashedPassword);
    const individualId = await postCompany(name, userId);
    res.json(individualId);
  } catch (err) {
    console.error(err);
    res.status(405).send("Failed to create user");
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createIndividual,
  createCompany,
};
