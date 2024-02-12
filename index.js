//creating the data structure of questions
let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName = readlineSync.question("Enter your name - ?");
console.log(kuler(`Hello ${userName} welcome to Quizify`, "#dc2626"));

const database = {
  data: [
    {
      question: `let a={},b={}" 
      console.log(a==b)
      console.log(a===b)`,
      options: {
        a: "false fale",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: `Object.assign(target,source) creates which type of copy?`,
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: `Is method chaining possible with forEach?`,
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

const leaderBoard = {
  data: [
    {
      name: "Rucha",
      score: 3,
    },
    {
      name: "Ru",
      score: 1,
    },
    {
      name: "Ruh",
      score: 2,
    },
  ],
};
// Display the question and options

function playGame(userAnswer, correctAnswer) {
  if (userAnswer == correctAnswer) {
    console.log(kuler("Correct Answer", "#059669"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#1d4ed8"));
  }
}

function displayQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question} \n`);
    console.log(`Choose the answer from below options :`);
    for (let key in database.data[i].options) {
      console.log(`${key} : ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer a/b/c/d - ? ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let scoreBoardList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(
    kuler("\nCheck your position on the Leader Board 🎉 ", "#fde047"),
  );
  for (let leader of scoreBoardList) {
    console.log(kuler(`${leader.name} - Score ${leader.score}`, "#9333ea"));
  }
}

displayQuestionAndOptions(database);
console.log(kuler(`\nYour score is - ${score}`, "#5eead4"));
showHighScorer(leaderBoard);
