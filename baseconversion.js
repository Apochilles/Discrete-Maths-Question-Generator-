// Convert Base 10 to different Base

const clearQuestion = () => {
  questionOne.innerHTML = "";
  answerOne.innerHTML = "";
};

const questionOne = document.getElementById("question");
const answerOne = document.getElementById("showAnswer");
const buttonOne = document.getElementById("revealAnswer");
const generateQs = document.getElementById("generateQuestions");

function baseConversionAnswer(num, base) {
  return num.toString(base);
}

function generateRandomBinary() {
  binNum = Math.ceil(Math.random() * 100).toString(2);
  return binNum;
}

generateQs.addEventListener("click", function(e) {
  let randomNumber = Math.ceil(Math.random() * 100); // Generates a random number from 1 to 100
  let randomBase = Math.ceil(Math.random() * 16); // Generates a random Base from 2 to 16
  clearQuestion();
  questionOne.innerHTML = `Convert decimal ${randomNumber} to number of base of ${randomBase} `;
  let answer = baseConversionAnswer(randomNumber, randomBase);
  buttonOne.addEventListener("click", function(e) {
    answerOne.innerHTML = "";
    answerOne.innerHTML += `${answer}`;
  });
});
