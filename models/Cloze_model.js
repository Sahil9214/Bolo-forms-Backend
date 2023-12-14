const mongoose = require("mongoose");

const clozeSchema = mongoose.Schema(
  {
    question: String,
    blanks: [String],
  },
  {
    versionKey: false,
  }
);

const cloze_model = mongoose.model("Cloze", clozeSchema);

module.exports = {
  cloze_model,
};
