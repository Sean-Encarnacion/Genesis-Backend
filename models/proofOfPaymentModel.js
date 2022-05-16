const mongoose = require("mongoose");

const proofOfPaymentSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    referenceNumber: {
      type: String,
      required: [true, "Please add reference number"],
    },
    proof: {
      type: String,
      required: [true, "Please add url of proof img"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProofOfPayment", proofOfPaymentSchema);
