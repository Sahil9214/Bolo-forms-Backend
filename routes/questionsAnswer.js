const express = require("express");
const { comprehension_model } = require("../models/Comprehension_model");
const { cloze_model } = require("../models/Cloze_model");
const { categorize_model } = require("../models/Categorize_model");
const questionAnswerRouter = express.Router();

// Add questions
questionAnswerRouter.post("/add", async (req, res) => {
  try {
    const { type, data } = req.body;
    let questionModel;

    switch (type) {
      case "categorize":
        questionModel = comprehension_model;
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
questionAnswerRouter.get("/getAll", async (req, res) => {
  try {
    const [categorizeQuestions, clozeQuestions, comprehensionQuestions] =
      await Promise.all([
        comprehension_model.find(),
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
  questionAnswerRouter,
};
