const mongoose = require("mongoose");

const cloze_Schema = mongoose.Schema(
  {
    question: String,
    blanks: [String],
  },
  {
    versionKey: false,
  }
);

const cloze_model = mongoose.model("Cloze", cloze_Schema);

module.exports = {
  cloze_model,
};
