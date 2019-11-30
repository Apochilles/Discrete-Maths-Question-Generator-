const express = require("express");
const router = express.Router();
const triviaController = require("../controllers/triviaController");

router
  .get("/bases", triviaController.base)
  .get("/logics", triviaController.logic)
  .get("/graphs", triviaController.graphs)
  .get("/bigo", triviaController.bigo)
  .get("/matrices", triviaController.matrices)
  .get("relations", triviaController.relations);

module.exports = router;
