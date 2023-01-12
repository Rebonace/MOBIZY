const { Router } = require("express");

const { login } = require("../controllers/authentication.controller");
const {
  getUserById,
  getAllUser,
  createIndividual,
  createCompany,
} = require("../controllers/user.controller");
const {
  //   verifyToken,
  //   verifyAdmin,
  hashPassword,
} = require("../services/authentication.service");
const {
  checkPasswordConfirmation,
  validateUser,
  validateCompany,
} = require("../services/user.service");

const userRouter = new Router();

userRouter.post("/login", login);
// userRouter.get("/", verifyToken, verifyAdmin, getAllUser);
userRouter.get("/", getAllUser);
userRouter.post(
  "/individual",
  checkPasswordConfirmation,

  validateUser,

  hashPassword,
  createIndividual
);
userRouter.post(
  "/company",
  checkPasswordConfirmation,

  validateCompany,

  hashPassword,
  createCompany
);

userRouter.get("/:id", getUserById);

module.exports = {
  userRouter,
};
