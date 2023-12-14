const express = require("express");
const { comprehension_model } = require("../models/Comprehension_model");
const { cloze_model } = require("../models/Cloze_model");
const { categorize_model } = require("../models/Categorize_model");
const questionAnswerRouter = express.Router();

// Add questions
const getModelByType = (type) => {
  switch (type) {
    case "categorize":
      return categorize_model;
    case "cloze":
      return cloze_model;
    case "comprehension":
      return comprehension_model;
    default:
      throw new Error("Invalid question type");
  }
};

// Add questions
questionAnswerRouter.post("/add", async (req, res) => {
  try {
    const { type, data } = req.body;
    const questionModel = getModelByType(type);
    const newQuestion = await questionModel.create(data);
    res.json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get questions
questionAnswerRouter.get("/getAll", async (req, res) => {
  try {
    const [categorizeQuestions, clozeQuestions, comprehensionQuestions] = await Promise.all([
      categorize_model.find(),
      cloze_model.find(),
      comprehension_model.find(),
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
