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
    question: "What National Park contains the highest peak in North America??",
    choices: ["Grand Teton National Park", "Hawaii Volcanoes National Park", "Mount Rainier National Park", "Denali National Park"],
    correctAnswer: "Denali National Park",
    fact: "Wrong! Formerly known as Mount McKinley, Denali is the tallest mountain in North America with a peak elevation of 20,310 feet. Thinking about climbing this massive mountain? Make sure you pack enough supplies for a 3-4 week trip."
  },
  {
    id: 1,
    question: "What is the most visited park in the National Park System?",
    choices: ["Acadia", "Grand Canyon", "Great Smoky Mountains", "Yellowstone"],
    correctAnswer: "Great Smoky Mountains",
    fact: "Wrong! The most visited national park in the United States sprawls between North Carolina and Tennessee. Over 6.4 million people experienced the wildlife and wildflowers of Great Smoky Mountains in 2009--more than twice the number who visited Grand Canyon, the second most popular park."
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
    fact: "Wrong! U.S. national parks are home to the highest point in North America(Mount McKinley in Denali National Park, Alaska), the longest cave system in the world(the Mammoth Cave system in Mammoth Cave National Park, Kentucky), and the deepest lake in the U.S.(Crater Lake in Oregon's Crater Lake National Park"
  },
  {
    id: 3,
    question: "What national park is home to the world's largest tree by volume?",
    choices: [
      "Redwood National Park",
      "Sequoia National Park",
      "Everglades National Park",
      "Joshua Tree National Park"
    ],
    correctAnswer: "Sequoia National Park",
    fact: "Wrong! The General Sherman Tree located in California's Sequoia National Park is the largest tree by volume in the world. This massive tree measures a whopping 275 feet tall and 25 feet wide, resulting in a trunk volume of 52,513 cubic feet. It is also one of the oldest trees on the planet with an estimated age of 2,300-2,700 years old."
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
    fact: "Wrong! Mammoth Cave National Park in Kentucky is home to the world's longest known cave system, which measures more than 400 miles long. The park offers a variety of guided cave tours – including a ranger-led nature trek for kids – as well as camping, horseback riding, biking and other activities to explore the beauty of Kentucky's Green River Valley. Courtesy of Travel Channel."
  },
  {
    id: 5,
    question: "What state contains the most national parks?",
    choices: ["Colorado", "Utah", "Alaska", "California"],
    correctAnswer: "California",
    fact: "Wrong! With the creation of Pinnacles National Park in 2013, California broke its 8-8 tie with Alaska to become the state with the most national parks. In addition to its nine national parks, California also maintains over 20 National Park System-administered areas including multiple National Monuments, National Historic Trails, National Historic Sites and more."
  },
  {
    id: 6,
    question:
      "Through how many states does the Appalachian National Scenic Trail pass?",
    choices: ["10", "14", "9", "12"],
    correctAnswer: "14",
    fact: "Wrong! The Appalachian Trail passes through 14 states including Georgia, Tennessee, Virginia, West Virginia, Maryland, Pennsylvania, New Jersey, New York, Connecticut, Massachusetts, Vermont, New Hampshire and Maine."
  },
  {
    id: 7,
    question:
      "Which of the following is not one of Utah's 'Mighty 5' National Parks?",
    choices: ["Arches", "Capitol Reef", "Bryce Canyon", "Badlands"],
    correctAnswer: "Badlands",
    fact: "Wrong! Who's the odd man out? South Dakota's Badlands National Park is NOT a distinguished member of Utah's Mighty 5, a group of adventure-packed recreation areas that includes Canyonlands, Arches, Capitol Reef, Bryce Canyon and Zion National Parks."
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
    fact: "Wrong! Crater Lake National Park in Southern Oregon is home to, you guessed it, Crater Lake – the deepest lake in the United States. Created about 7,700 years ago when the 12,000-ft-tall Mount Mazama collapsed following a massive eruption, the lake is deep enough to submerge 1.5 Empire State Buildings!"
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
    fact: "Wrong! At just 5,549.75 acres, Hot Springs National Park in Arkansas is the smallest national park in America. The largest park, Alaska's Wrangell-St. Elias, is over 2,350 times bigger at 13.2 million acres."
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
const resultsDiv = document.getElementById("results")
const timer = document.getElementById("timeRemaining")

let score = 0;
let count = 10;
let currentIndex = 0;

scoreBoard.innerHTML = "questions correct: " + score;
counter.innerHTML = "questions left: " + count;
scoreBoard.style.display = "none";
counter.style.display = "none";
timer.style.display = "none"

playButton.addEventListener("click", function() {
    scoreBoard.style.display = "block";
    counter.style.display = "block"
    timer.style.display = "block"
    displayNextQuestion();
});

function displayNextQuestion(){
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
  document.getElementById('choice0').checked = false;
  document.getElementById('choice1').checked = false;
  document.getElementById('choice2').checked = false;
  document.getElementById('choice3').checked = false;
}
function userClicked() {
    if(currentIndex<10){

        let userInput = document.querySelector('input[name="answer"]:checked').value;
        // alert(userInput)
        if (userInput === questions[currentIndex].correctAnswer) {
            alert("correct");
            score ++
            scoreBoard.innerHTML = "questions correct: " + score;
        }
        else {
            alert(questions[currentIndex].fact)
        }
        currentIndex++;
        count--
        counter.innerHTML = "questions left: " + count;
        if(currentIndex < 9) {
            displayNextQuestion()
        }
        else {
            // alert("game over")

            results.innerHTML = "Thank you for playing! Here is your final score out of 10: " + score 
            choiceButtonGroup.style.display = "none";
            playButton.style.display = "none";
            scoreBoard.style.display = "none";
            counter.style.display = "none"
            timer.style.display = "none"
        }   

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
