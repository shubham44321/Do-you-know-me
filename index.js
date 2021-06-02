const readlineSync = require("readline-sync");
var score = 0;

var username = readlineSync.question(`what's your name? `);
console.log(`Welcome ${username}, do you know shubham?`);

function printScore() {
  console.log(`Your score is ${score}.`);
}

function validateQuestionAndAnswer(question, answer) {
  var userAnswer = readlineSync.question(`${question} `);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score++;
  }
}

var questions = [
  {
    question: "In which city do i live?",
    answer: "Mumbai",
  },
  {
    question: "What is my age?",
    answer: "22",
  },
  {
    question: "Where do in work currently ?",
    answer: "Mobitrail",
  },
];

questions.forEach((question) => {
  validateQuestionAndAnswer(question.question, question.answer);
});
var highScores = [
  {
    name: "shubham",
    score: 3,
  },
  {
    name: "rohit",
    score: 1,
  },
];
console.table(highScores);
printScore();
var isHighScoreBeaten = false;
function checkForHighScore(score) {
  let result = false;
  var highestScored = highScores.sort((a, b) => b.score - a.score)[0].score;
  if (score >= highestScored) {
    return true;
  }
}
isHighScoreBeaten = checkForHighScore(parseInt(score));
if (isHighScoreBeaten) {
  var addToHighScore = {
    name: username,
    score: score,
  };
  highScores = [...highScores, addToHighScore];
  highScores.sort((a, b) => b.score - a.score);
  console.table(highScores);
  console.log(`Congratulations,You have beaten the high score of this game.`);
}
