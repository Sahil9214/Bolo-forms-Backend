const express = require("express");
const {
  comprehensioni_model,
  cloze_model,
  categorize_model,
} = require("../models");

const questionrouter = express.Router();

// Add questions
questionrouter.post("/add", async (req, res) => {
  try {
    const { type, data } = req.body;
    let questionModel;

    switch (type) {
      case "categorize":
        questionModel = comprehensioni_model;
        break;

      case "cloze":
        questionModel = cloze_model;
        break;

      case "comprehension":
        questionModel = categorize_model;
        break;

      default:
        return res.status(400).json({ error: "Invalid question type" });
    }

    const newQuestion = await questionModel.create(data);
    res.json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get questions
questionrouter.get("/getAll", async (req, res) => {
  try {
    const [categorizeQuestions, clozeQuestions, comprehensionQuestions] =
      await Promise.all([
        comprehensioni_model.find(),
        cloze_model.find(),
        categorize_model.find(),
      ]);

    const allQuestions = {
      categorize: categorizeQuestions,
      cloze: clozeQuestions,
      comprehension: comprehensionQuestions,
    };

    res.json(allQuestions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  questionrouter,
};
