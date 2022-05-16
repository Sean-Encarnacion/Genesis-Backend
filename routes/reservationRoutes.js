const express = require("express");
const router = express.Router();
const {
  registerReservation,
  getReservation,
} = require("../controllers/reservationsController");

// const { protect } = require("../middleware/authMiddleware");

router.post("/", registerReservation);
router.get("/:reservationId", getReservation);

module.exports = router;
