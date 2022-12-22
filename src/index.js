const express = require("express");
const dbConnect = require("./components/config/db");
const quizRouter = require("./components/features/routes/quiz.routes");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.get("/", (req, res) => {
  res.send("Welcome to Masai Quiz API");
});
server.use("/quiz", quizRouter);

server.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server started at port ${PORT}`);
});
