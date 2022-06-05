const mongoose = require("mongoose");

const TraineeSchema = new mongoose.Schema(
  {
    traineeNumber: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trainee", TraineeSchema);
