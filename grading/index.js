// This is the input prompt required to enter the students
const getGrade = require("./grading");

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the student's marks (between 0 and 100): ", (marks) => {
  console.log(getGrade(marks));
  rl.close();
});