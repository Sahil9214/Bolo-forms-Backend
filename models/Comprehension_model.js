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

const  comprehension_model = mongoose.model("Comprehension", comprehensionSchema);

module.exports = {
  comprehension_model,
};
