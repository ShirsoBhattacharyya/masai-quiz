const express = require("express");
const router = express.Router();
const QuestionModel = require("../models/question.model");

//Questions filtered by Difficulty Level
router.get("/", async (req, res) => {
  const { filter_by_category, filter_by_difficulty, no_of_questions } =req.query;

  try {
    if (
      filter_by_category &&
      filter_by_difficulty &&
      no_of_questions
    ) {
      let questions = await QuestionModel.find({
        category: filter_by_category,
        difficulty: filter_by_difficulty,
      })
        .limit(no_of_questions);
      res.json({ message: "success", response: questions });
    } else if (filter_by_category) {
      let questions = await QuestionModel.find({
        category: filter_by_category,
      })
        .limit(10);
      res.json({ message: "success", response: questions });
    } else if (filter_by_difficulty && current) {
      let questions = await QuestionModel.find({
        difficulty: filter_by_difficulty,
      })
        .limit(10);
      res.json({ message: "success", response: questions });
    } else {
      let questions = await QuestionModel.find()
        .limit(10);
      res.json({ message: "success", response: questions });
    }
  } catch (e) {
    res.status(401).json({ message: "error", response: e.message });
  }
});
module.exports = router;
