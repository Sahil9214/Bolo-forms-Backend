const mongoose = require("mongoose");

const comprehensionSchema = mongoose.Schema(
  {
    passage: String,
    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: String,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const  comprehensioni_model = mongoose.model("Comprehension", comprehensionSchema);

module.exports = {
  comprehensioni_model,
};
