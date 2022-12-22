const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema(
  {
    category: {
      type: String,
      enum: [ "General Knowledge", "Sports", "Geography"],
      default: "General Knowledge",
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    question: { type: String, required:true },
    correct_answer:{type:String,required:true},
    incorrect_answers:{type:Array,required:true}
  },
  { timestamps: true }
);
const QuestionModel = model("question", QuestionSchema);
module.exports = QuestionModel;