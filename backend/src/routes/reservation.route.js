const { Router } = require("express");
const reservationController = require("../controllers/reservation.controller");

const reservationRouter = new Router();

reservationRouter.get("/", reservationController.list);
reservationRouter.get("/:reservationId", reservationController.get);

module.exports = {
  reservationRouter,
};
