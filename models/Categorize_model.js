const mongoose = require("mongoose");

const categorize_Schema = mongoose.Schema(
  {
    question: String,
    options: [String],
  },
  {
    versionKey: false,
  }
);

const categorize_model = mongoose.model("Categorize", categorize_Schema);

module.exports = {
  categorize_model,
};
