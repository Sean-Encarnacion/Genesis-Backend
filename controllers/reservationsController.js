const asyncHandler = require("express-async-handler");
const Reservation = require("../models/reservationModel");
const User = require("../models/userModel");

// @desc    Register new reservation
// @route   POST /api/reservations
// @access  Private

const registerReservation = asyncHandler(async (req, res) => {
  const {
    userId,
    contactNumber,
    checkInDate,
    checkOutDate,
    numberOfVisitors,
    totalBill
  } = req.body;

  if (!userId || !contactNumber || !checkInDate || !checkOutDate || !numberOfVisitors || !totalBill) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exist
  const userExists = await User.findOne({ _id: userId });

  if (!userExists) {
    res.status(400);
    throw new Error("User don't exist");
  }

  // Create Reservation
  const reservation = await Reservation.create({
    visitor: userId,
    contactNumber,
    checkInDate,
    checkOutDate,
    numberOfVisitors,
    totalBill,
  });

  if (reservation) {
    res.status(201).json({
      _id: reservation.id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid reservation data");
  }
});

// @desc    Retrieve a reservation
// @route   POST /api/users/login
// @access  Public

const getReservation = asyncHandler(async (req, res) => {
  const reservationId = req.params.reservationId;

  if(!reservationId){
    res.status(400);
    throw new Error("Please add all fields");
  } 

  const reservation = await Reservation.findById(reservationId);

  if(reservation) {
    res.status(200).json({
      reservation,
      verified: true
    });
  } else {
    res.status(200).json({
      reservation,
      verified: false
    });
  }

});

module.exports = {
  registerReservation,
  getReservation,
};