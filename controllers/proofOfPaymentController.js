const asyncHandler = require("express-async-handler");
const ProofOfPayment = require("../models/proofOfPaymentModel");
const User = require("../models/userModel");

// @desc    Register new proof of payment
// @route   POST /api/pop
// @access  Private

const registerProofOfPayment = asyncHandler(async (req, res) => {
  const {
    email,
    referenceNumber,
    proof,
  } = req.body;

  if (!email|| !referenceNumber || !proof) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exist
  const userExists = await User.findOne({ email });

  if (!userExists) {
    res.status(400);
    throw new Error("User don't exist");
  }

  // Create Proof of payment
  const proofOfPayment = await ProofOfPayment.create({
    email,
    referenceNumber,
    proof,
  });

  if (proofOfPayment) {
    res.status(201).json({
      _id: proofOfPayment.id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid proof of payment data");
  }
});

// @desc    Retrieve proof of payment
// @route   POST /api/pop
// @access  Admin

const getProofOfPayment = asyncHandler(async (req, res) => {
  const proofOfPaymentId = req.params.proofOfPaymentId;

  if(!proofOfPaymentId){
    res.status(400);
    throw new Error("Please add all fields");
  } 

  const proofOfPayment = await ProofOfPayment.findById(proofOfPaymentId);

  if(proofOfPayment) {
    res.status(200).json({
      proofOfPayment,
      verified: true
    });
  } else {
    res.status(200).json({
      proofOfPayment,
      verified: false
    });
  }

});

module.exports = {
  registerProofOfPayment,
  getProofOfPayment,
};