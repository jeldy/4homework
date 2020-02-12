const timer = document.getElementById("timer")
const leaderboard = document.getElementById("leaderboard")
const startQuiz = document.getElementById("startQuiz")
const startButton = document.getElementById("startButton")
const quizQues = document.getElementById("quizQues")
const quesNum = document.getElementById("quesNum")
const quesInfo = document.getElementById("quesInfo")
const answerQues = document.getElementById("answerQues")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const endGame = document.getElementById("endGame")
const initialLetters = document.getElementById("initialLetters")
const endInfo = document.getElementById("endInfo")
const leaderboardLadder = document.getElementById("leaderboardLadder")
const submitButton = document.getElementById("submitButton")


const myQues = [
  ["Question 1", 
  "The best point guard in the NBA right now is", 
      ["Russell Westbrook",
      "Damian Lillard",
      "Kemba Walker",
      "Trae Young"],
  1], 
  ["Question 2", 
  "Kevin Durant is a", 
      ["cool guy",
      "insecure cupcake",
      "towel",
      "respected champion"],
  2], 
  ["Question 3", 
  "Who has the brightest future of any NBA team", 
      ["New York Knicks",
      "Oklahoma City Thunder",
      "Los Angeles Lakers",
      "Houston Rockets"],
  2], 
  ["Question 4", 
  "Best fast food available is", 
      ["Inn-n-Out",
      "McDonalds",
      "Wendys",
      "Whataburger"],
  4], 
  ["Question 5", 
  "The Thunder have not won an NBA title because", 
      ["2012 Finals choke job by James Harden",
      "Pat Bev's garbage ass injuring Russ in 2013",
      "KD throwing the series up 3-1 against the Warriors",
      "All of the Above"],
  4], 
  ["Question 6", 
  "Who is the best all around basketball player of all time", 
      ["Lebron",
      "MJ",
      "Magic",
      "Nick Young"],
  1], 
  ["Question 7", 
  "What am I gonna do if I cant get this startButton.eventListener to work", 
      ["cry",
      "break things",
      "consider withdraw",
      "all of the above"],
  4], 
  ["Question 8", 
  "The best football team in the big 12 is", 
      ["Oklahoma",
      "Texas (lmfao)",
      "Kansas (who texas lost to)",
      "Oklahoma State"],
  1], 
  ["Question 9", 
  "What division am I in League of Legends", 
      ["Iron",
      "Silver",
      "Platinum",
      "Challenger"],
  3], 
  ["Question 10", 
  "The best HBO show of all time is", 
      ["Sopranos",
      "Will & Grace",
      "Game of Thrones",
      "Entourage"],
  4]
];

let secondsLeft = 0;
let currentQuestion = 0;
let totalPoints = 0;
var interval;
startButton.addEventListener("click", quiz);
submitButton.addEventListener("click", submitResults);

function startingScreen() {
  switchScreen('begin')
  timer.textContent = secondsLeft;
}

function quiz(event) {
  answerQues.addEventListener("click", selectedAnswer)
  switchScreen('quiz');
  secondsLeft = 60;
  timerQ();
  let rightAnswer = 0;
  displayQuestion(currentQuestion);

  function displayQuestion(numberQues) {
    rightAnswer = myQues[numberQues][3];
    quesNum.innerHTML = myQues[numberQues][0];
    quesInfo.innerHTML = myQues[numberQues][1];
    option1.innerHTML = myQues[numberQues][2][0];
    option2.innerHTML = myQues[numberQues][2][1];
    option3.innerHTML = myQues[numberQues][2][2];
    option4.innerHTML = myQues[numberQues][2][3];
  }
  function selectedAnswer(eve) {
    let selection = event.target.getAttribute("name")
    currentQuestion++;
    if (currentQuestion > 9) {
      doneQuiz(totalPoints);
    }
    else if (selection === rightAnswer) {
      totalPoints += 25;
      alert("You guessed right")
      displayQuestion(currentQuestion);
    }
    else {
      secondsLeft -= 5;
      alert("You guessed wrong");
      timeChange();
      displayQuestion(currentQuestion);
    }


  }
}
function doneQuiz(totalPoints) {
  switchScreen('endQuiz')
  endGame.textContent = totalPoints;
}
function submitResults(event){
  event.preventDefault();
  var userInitials = initialLetters.value;
  console.log(userInitials);
}
function timerQ(){
  interval = setInterval(function(){
      timeChange();
      if (secondsLeft < 1){
          endInfo(totalPoints);
      }
      secondsLeft--;
  }, 1000);
}
function timeChange(){
  timer.textContent = secondsLeft;
}
function switchScreen(screenShow){
  switch (screenShow) {
        case 'begin':
            startQuiz.style.display = "block";
            quizQues.style.display = "none";
            endInfo.style.display = "none";
            leaderboardLadder.style.display = "none";
            break;
        case 'quiz':
            startQuiz.style.display = "none";
            quizQues.style.display = "block";
            endInfo.style.display = "none";
            leaderboardLadder.style.display = "none";
            break;
        case 'endQuiz':
            startQuiz.style.display = "none";
            quizQues.style.display = "none";
            endInfo.style.display = "block";
            leaderboardLadder.style.display = "none";
            break;
        case 'highscores':
            startQuiz.style.display = "none";
            quizQues.style.display = "none";
            endInfo.style.display = "none";
            leaderboardLadder.style.display = "block";
            break;
  }
}
