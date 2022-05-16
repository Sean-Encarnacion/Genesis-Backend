const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
  {
    visitor: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please visitor id"],
      ref: "User"
    },
    contactNumber: {
      type: String,
      required: [true, "Please add contact number"],
    },
    checkInDate: {
      type: Date,
      required: [true, "Please add a check in date"],
    },
    checkOutDate: {
      type: Date,
      required: [true, "Please add a check out date"],
    },
    numberOfVisitors: {
      type: String,
      required: [true, "Please add number of visiors"],
    },
    totalBill: {
      type: String,
      required: [true, "Please add total bill"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservation", reservationSchema);
