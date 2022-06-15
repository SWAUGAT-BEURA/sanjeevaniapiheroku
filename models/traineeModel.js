const mongoose = require("mongoose");

const TraineeSchema = new mongoose.Schema(
  {
    trainee: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trainee", TraineeSchema);
