//Game starts when user clicks "test your knowledge" button
//First Question and Choices Appear
//User clicks 1 Choice (cannot click more than 1 Choice) 
//store User Choice, Check if Correct
//Next question appears after User clicks Correct Answer and/or if Timer of 30 seconds is up
//If User clicks Wrong Answer, alert "Wrong" with correct answer/fact blurb pop-up
//For every Question, Display: how many Questions Left, how much Time Remaining, and how many Correct 
//Once Last Question is Answered, Display "Thanks for Playing" with image and option to reset game 

//GAME STATE: 
let totalScore = 0;
let currentQuestion = null;
let currentIndex = 0;
let answeredQuestions = [];

const questions = [
    {   id: 0,
        question: "What is the newest national park?",
        choices: ["Congaree", "Big Bend", "Mount Rainier", "Great Sand Dunes"],
        correctAnswer: "Great Sand Dunes"
    },
    {
        id: 1,
        question: "What is the most visited park in the National Park System?",
        choices: ["Acadia", "Grand Canyon", "Great Smoky Mountains", "Yellowstone"],
        correctAnswer: "Great Smoky Mountains"
    },
    {
        id: 2,
        question: "Which of the following exists within the boundaries of a national park?",
        choices: ["The highest point in North America", "The longest cave system in the world", "The deepest lake in the U.S.", "All of the above" ],
        correctAnswer: "All of the above"
    },
    {
        id: 3,
        question: "What national park is home to the world's largest tree?",
        choices: ["Redwood National Park", "Sequoia National Park", "Everglades National Park", "Joshua Tree National Park"],
        correctAnswer: "Everglades National Park"
    }, 
    {
        id: 4,
        question: "What national park is home to the longest cave system in the world?",
        choices: ["Mammoth Cave National Park", "Canyonelands National Park", "Carlsbad Caverns National Park", "Great Basin Park" ],
        correctAnswer: "Mammoth Cave National Park"
    },
    {
        id: 5,
        question: "What state contains the most national parks?",
        choices: ["Colorado", "Utah", "Alaska", "California"],
        correctAnswer: "California"
    },
    {
        id: 6, 
        question: "Through how many states does the Appalachian National Scenic Trail pass?",
        choices: ["10", "14", "9", "12"],
        correctAnswer: "14"
    },
    {
        id: 7,
        question: "Which of the following is not one of Utah's 'Mighty 5' National Parks?",
        choices: ["Arches", "Capitol Reef", "Bryce Canyon", "Badlands"],
        correctAnswer: "Badlands"
    },
    {
        id: 8,
        question: "What national park is home to the deepest lake in the U.S.?",
        choices: ["Lake Clark National Park", "Kenai Fjords National Park", "Crater Lake National Park", "Great Basin National Park"],
        correctAnswer: "Crater Lake National Park"
    },
    {   
        id: 9,
        question: " What is the smallest national park?",
        choices: ["Virgin Islands National Park", "Hot Springs National Park", "Cuyahoga Valley National Park", "Mesa Verde National Park"],
        correctAnswer: ["Hot Springs National Park"]
    }
]

//START OVER (AGAIN AGAIN) PLAN:
//Add event listener to start game button (alert)
//Make button show question
//Make button show choices buttons (button group)
//Add content(choices) to choices buttons
//Add event listeners to each choice button
//If correct:
//add to score (total +=1)
//display the scoreboard with updated score (DOM)
//move to next question
//If wrong:
//If choice button selected is wrong, move to next question

const playButton = document.querySelector('button')
const choiceButtonGroup = document.querySelector('.button-group')
const choiceButton0 = document.getElementById("choice0")
const choiceButton1 = document.getElementById("choice1")
const choiceButton2 = document.getElementById("choice2")
const choiceButton3 = document.getElementById("choice3")


console.log(choiceButton0)
playButton.addEventListener('click', function(){
    playButton.innerHTML = questions[0].question
    choiceButtonGroup.classList.add('block')
    choiceButton0.innerHTML = questions[0].choices[0]
    choiceButton1.innerHTML = questions[0].choices[1]
    choiceButton2.innerHTML = questions[0].choices[2]
    choiceButton3.innerHTML = questions[0].choices[3]
})

choiceButton0.addEventListener('click', function () {
    alert("wrong")
});
choiceButton1.addEventListener('click', function () {
    alert("wrong")
});
choiceButton2.addEventListener('click', function () {
    alert("wrong")
});
choiceButton3.addEventListener('click', function () {
    alert("correct")
});





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
// set0.addEventListener('click', function(){
//     const set0 = document.querySelector('#choice0') 
// });
// set1.addEventListener('click', function(){
//     const set1 = document.querySelector('#choice1')
// });
// set2.addEventListener('click', function(){
//     const set2 = document.querySelector('#choice2')
// });
// set3.addEventListener('click', function(){
//     const set3 = document.querySelector('#choice3')
// });



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
