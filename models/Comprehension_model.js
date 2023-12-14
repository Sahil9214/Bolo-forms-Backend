const mongoose = require("mongoose");

const comprehension_Schema = mongoose.Schema(
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

const  comprehension_model = mongoose.model("Comprehension", comprehension_Schema);

module.exports = {
  comprehension_model,
};
