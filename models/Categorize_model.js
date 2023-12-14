const mongoose = require("mongoose");

const categorizeSchema = mongoose.Schema(
  {
    question: String,
    options: [String],
  },
  {
    versionKey: false,
  }
);

const categorize_model = mongoose.model("Categorize", categorizeSchema);

module.exports = {
  categorize_model,
};
