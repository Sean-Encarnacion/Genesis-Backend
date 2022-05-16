const express = require("express");
const router = express.Router();
const {
  registerProofOfPayment,
  getProofOfPayment,
} = require("../controllers/proofOfPaymentController");

// const { protect } = require("../middleware/authMiddleware");

router.post("/", registerProofOfPayment);
router.get("/:proofOfPaymentId", getProofOfPayment);

module.exports = router;
