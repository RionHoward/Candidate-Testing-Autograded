const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// new save on github
// TODO 1.1a: Define candidateName // 
let candidateName = ""


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ""


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = []


function askForName() {

  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question("What is your name?");
  console.log(`Candidate Name: ${candidateName}`);
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]))
    //console.log(candidateAnswers[i]);
    //console.log(correctAnswers[i]);
    //console.log(`You answered the question with ${(candidateAnswers[i])}. The correct answer is ${(correctAnswers[i])}. `)


    if ((candidateAnswers[i].toUpperCase()) === (correctAnswers[i].toUpperCase())) {

      console.log(`Your Answer: ${(candidateAnswers[i])}
Correct:${(correctAnswers[i])}
`)

    } else {
      console.log(`Your Answer: ${(candidateAnswers[i])} 
Correct:${(correctAnswers[i])}
`)

      //score = (num.candidateAnswers / (num.correctAnswers))*100;
      //let score = (candidateAnswers.num / (correctAnswers.num))*100;

    }






  }





}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //if (candidateAnswer === correctAnswer){
  //console.log("Great job that is correct!");
  // } else {
  //  console.log("Sorry that is incorrect!");
  // }


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let trueAnswers = 0
  

  for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i].toUpperCase() === (correctAnswers[i].toUpperCase())) {
      trueAnswers++


    }


  }
  grade = ((trueAnswers / questions.length) * 100)
  if (grade >= 80) {
    console.log(`>>>Overall Grade: ${grade}% (${trueAnswers} of ${correctAnswers.length} responses correct)<<<
>>> Status: PASSED <<<`)
  } else {
    console.log(`Overall Grade: ${grade}% (${trueAnswers} of ${correctAnswers.length} responses correct) <<<
>>> Status: FAILED <<<`)
  }
  
  



  return grade;


}
function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};