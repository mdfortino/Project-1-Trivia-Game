//Game starts when user clicks "test your knowledge" button
//First Question and Choices Appear
//User clicks 1 Choice (cannot click more than 1 Choice)
//store User Choice, Check if Correct
//Next question appears after User clicks Correct Answer and/or if Timer of 30 seconds is up
//If User clicks Wrong Answer, alert "Wrong" with correct answer/fact blurb pop-up
//For every Question, Display: how many Questions Left, how much Time Remaining, and how many Correct
//Once Last Question is Answered, Display "Thanks for Playing" with image and option to reset game

//GAME STATE:
// let score = 0;
// let currentQuestion = null;
// let currentIndex = 0;
// let userAnswers = [];

const questions = [
  {
    id: 0,
    question: "What is the newest national park?",
    choices: ["Congaree", "Big Bend", "Mount Rainier", "Great Sand Dunes"],
    correctAnswer: "Great Sand Dunes",
    fact: "Great Sand Dunes factssss "
  },
  {
    id: 1,
    question: "What is the most visited park in the National Park System?",
    choices: ["Acadia", "Grand Canyon", "Great Smoky Mountains", "Yellowstone"],
    correctAnswer: "Great Smoky Mountains",
    fact: "The most visited national park in the United States sprawls between North Carolina and Tennessee. Over 6.4 million people experienced the wildlife and wildflowers of Great Smoky Mountains in 2009--more than twice the number who visited Grand Canyon, the second most popular park."
  },
  {
    id: 2,
    question:
      "Which of the following exists within the boundaries of a national park?",
    choices: [
      "The highest point in North America",
      "The longest cave system in the world",
      "The deepest lake in the U.S.",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    fact: "U.S. national parks are home to the highest point..."
  },
  {
    id: 3,
    question: "What national park is home to the world's largest tree?",
    choices: [
      "Redwood National Park",
      "Sequoia National Park",
      "Everglades National Park",
      "Joshua Tree National Park"
    ],
    correctAnswer: "Everglades National Park",
    fact: "Dunno"
  },
  {
    id: 4,
    question:
      "What national park is home to the longest cave system in the world?",
    choices: [
      "Mammoth Cave National Park",
      "Canyonelands National Park",
      "Carlsbad Caverns National Park",
      "Great Basin Park"
    ],
    correctAnswer: "Mammoth Cave National Park",
    fact: "National park blah..."
  },
  {
    id: 5,
    question: "What state contains the most national parks?",
    choices: ["Colorado", "Utah", "Alaska", "California"],
    correctAnswer: "California",
    fact: "The state is DUNNO"
  },
  {
    id: 6,
    question:
      "Through how many states does the Appalachian National Scenic Trail pass?",
    choices: ["10", "14", "9", "12"],
    correctAnswer: "14",
    fact: "14 is the right answer because blah"
  },
  {
    id: 7,
    question:
      "Which of the following is not one of Utah's 'Mighty 5' National Parks?",
    choices: ["Arches", "Capitol Reef", "Bryce Canyon", "Badlands"],
    correctAnswer: "Badlands",
    fact: "BAD BAD BAD"
  },
  {
    id: 8,
    question: "What national park is home to the deepest lake in the U.S.?",
    choices: [
      "Lake Clark National Park",
      "Kenai Fjords National Park",
      "Crater Lake National Park",
      "Great Basin National Park"
    ],
    correctAnswer: "Crater Lake National Park",
    fact: "DEEP"
  },
  {
    id: 9,
    question: " What is the smallest national park?",
    choices: [
      "Virgin Islands National Park",
      "Hot Springs National Park",
      "Cuyahoga Valley National Park",
      "Mesa Verde National Park"
    ],
    correctAnswer: ["Hot Springs National Park"],
    fact: "SMALL"
  }
];

//START OVER (AGAIN AGAIN) PLAN:
//Add event listener to start game button (alert)
//Make button show question
//Make button show choices buttons (button group)
//Add content(choices) to choices buttons
//Add event listeners to each choice button

//If choice is correct:
//add to score (total +=1)
//display the scoreboard with updated score (DOM)
//move to next question
//If choice is wrong:
//If choice button selected is wrong, display next question (DOM)

//*scoreboard, counter and timer should only be displayed for each question... after click "test your knowledge"

const playButton = document.querySelector("button");
const choiceButtonGroup = document.querySelector(".button-group");
const label0 = document.getElementById("label0");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const scoreBoard = document.getElementById("score-board");
const counter = document.getElementById("count");
const button0 = document.getElementById("choice0");
const button1 = document.getElementById("choice1");
const button2 = document.getElementById("choice2");
const button3 = document.getElementById("choice3");

let score = 0;
let count = 10;
let currentIndex = 0;

scoreBoard.innerHTML = "questions correct: " + score;
counter.innerHTML = "questions left: " + count;

playButton.addEventListener("click", function() {
  playButton.innerHTML = questions[currentIndex].question;
  choiceButtonGroup.classList.add("block");
  label0.innerHTML = questions[currentIndex].choices[0];
  button0.value = questions[currentIndex].choices[0];
  label1.innerHTML = questions[currentIndex].choices[1];
  button1.value = questions[currentIndex].choices[1];
  label2.innerHTML = questions[currentIndex].choices[2];
  button2.value = questions[currentIndex].choices[2];
  label3.innerHTML = questions[currentIndex].choices[3];
  button3.value = questions[currentIndex].choices[3];
});

function userClicked() {
  let userInput = document.querySelector('input[name="answer"]:checked').value;
  // alert(userInput)
  if (userInput === questions[currentIndex].correctAnswer) {
    alert("correct");
  }
  else {
    alert(questions[currentIndex].fact)
  }
}

//button0.addEventListener('click', userClicked());
//button1.addEventListener('click', userClicked());
//button2.addEventListener('click', userClicked());
//button3.addEventListener('click', userClicked());

// const choiceButtons = [choiceButton0, choiceButton1, choiceButton2, choiceButton3]
// //     choiceButtons.forEach(function(choice,index) {
// //         choice.innerHTML = questions[currentIndex].choices[index]
// //         choice.addEventListener('click', function(){
// //             if(questions[currentIndex].correctAnswer === questions[currentIndex].choices[index]) {
// //                 console.log(true)
// //             }
// // userAnswers.forEach((question) => {

// choices.forEach(function(choice, index) {
//         choice.innerHTML = questions[currentIndex].choices[index]
//         choice.addEventListener('click', function(){
//             if(questions[currentIndex].correctAnswer === questions[currentIndex].choices[index]) {
//                 console.log(true)
//             }

//         })
//     })

// let score = 0;
// let userAnswers = 0;
// how to get input/value from choices
// for(i = 0; i<questions.length; i++) {
//     if(the value of the choice selected is equal to the value of correctAnswer){
//         score +=1;
// // }
// }

// userAnswers.forEach((question) => {
//     if(questions.choiceButton === questions.correctAnswer){
//         score +=1;
//     }
// console.log(score)
// })

// if answer is correct
//     score +=1
//     scoreBoard.innerHTML = score
//     move to next question

// //GAME ELEMENTS
// const playButton = document.querySelector('button')
// const choiceButtonGroup = document.querySelector('.button-group')
// let score = document.querySelector("h2")

// //GAME METHODS
// //End Game:
// const endGame = () => {
//     answeredQuestions.forEach((question) => {
//         //add to total score
//         if(question.selectedAnswer === question.correctAnswer)
//             totalScore++;
//     });
//     alert(`Thanks for playing! Here is your score: ${totalScore}`)
//     playButton.removeEventListener("Click", startGame);
//     choiceButtonGroup.removeEventListener("Click", saveAnswer);
//     choiceButtonGroup.style.display = "none";
// };
// // MDN Example:
// // function myFunction(event) {
// //     var x = event.target;
// //     document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
// //   }

// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// //Object.assign() copies values of own properties from one or more source objects to target object
// //Store Answer:
// const saveAnswer = (evt) => {
//     const selectedAnswer = evt.target.value;
//     const answeredQuestion = Object.assign({ selectedAnswer: selectedAnswer }, currentQuestion)
//     answeredQuestions.push(answeredQuestion);
//     currentQuestion = null;
//     displayNextQuestion();
//   }
//   //Display Next Question:
//   const displayNextQuestion = () => {
//       if(currentIndex == questions.length){
//           return endGame();
//       }
//   }
// //   currentQuestion = questions[currentIndex];

// //   currentQuestion.choices.map((choice, index) =>
// //The map() method creates a new array with the results of calling a provided function on every element in the calling array
// //want array of current question and answer choices to display one after another:
// // currentQuestion current choice
// // document.querySelector('id="choice0")
// //ex: const map1 = array1.map(x => x * 2);

// const startGame = () => {
//     choiceButtonGroup.classList.add('block');
//     playButton.addEventListener('click', saveAnswer);
//     displayNextQuestion();
// }

// playButton.addEventListener('click', function() {
//     const selections = [set0, set1, set2, set3]
//     selections.forEach(function(choice, index) {
//         choice.innerHTML = questions[currentIndex].choices[index]
//         choice.addEventListener('click', function(){
//             if(questions[currentIndex].correctAnswer === questions[currentIndex].choices[index]) {
//                 console.log(true)
//             }

//         })
//     })

//     playButton.innerHTML = questions[0].question
//     choiceButtonGroup.classList.add('block')
// })

// //validation
// // for (var i = 0; i <= questions.length; i++) {
// //     if(questions[i]===null )
// // }
// // const answers = document.getElementById('answers')
// // console.log(answers.dataset)

// // document.body.addEventListener('click', evt => {
// //     if (event.target.nodeName === "choice3") {
// //     console.log("Clicked correct", event.target.textContent);
// //     }
// // });
// // set buttonGroup setAttribute to ('data-index',answer)
// // buttonGroup.addEventListener('click',function(event){
// //     const checkSelection = event.target.dataset.index
// //     console.log(checkSelection)
// // })

// // for(i=0; i< questions.length; i++){
// //     if(questions[i] === correctAnswers[i]) {
// //       question =
// //     }
// //     if(choice == questions[])
// // }

// //Timer Function:
// //method to countdown: setInterval(countdown, 1000)
// //method to track and display time remaining: getTime(), Math.floor
// // let seconds
// // let countdownTimer = setInterval(createTimer,1000)
