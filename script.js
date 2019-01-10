//Game starts when user clicks "test your knowledge" button
//First Question and Choices Appear
//User clicks 1 Choice (cannot click more than 1 Choice) 
//store User Choice, Check if Correct
//Next question appears after User clicks Correct Answer and/or if Timer of 30 seconds is up
//If User clicks Wrong Answer, alert "Wrong" with correct answer/fact blurb pop-up
//For every Question, Display: how many Questions Left, how much Time Remaining, and how many Correct 
//Once Last Question is Answered, Display "Thanks for Playing" with image and option to reset game 

let total = 10;
let totalCorrectAnswers = [];
let userState = 0;
let userInput = [];
// let score = 0;
let questions = [
    {   question: "What is the newest national park?",
        choices: ["Congaree", "Big Bend", "Mount Rainier", "Great Sand Dunes"],
        correctAnswer: [3]
    },
    {
        question: "What is the most visited park in the National Park System?",
        choices: ["Acadia", "Grand Canyon", "Great Smoky Mountains", "Yellowstone"],
        correctAnswer: [2]
    },
    {
        question: "Which of the following exists within the boundaries of a national park?",
        choices: ["The highest point in North America", "The longest cave system in the world", "The deepest lake in the U.S.", "All of the above" ],
        correctAnswer: [3]
    },
    {
        question: "What national park is home to the world's largest tree?",
        choices: ["Redwood National Park", "Sequoia National Park", "Everglades National Park", "Joshua Tree National Park"],
        correctAnswer: [2]
    }, 
    {
        question: "What national park is home to the longest cave system in the world?",
        choices: ["Mammoth Cave National Park", "Canyonelands National Park", "Carlsbad Caverns National Park", "Great Basin Park" ],
        correctAnswer: [0]
    },
    {
        question: "What state contains the most national parks?",
        choices: ["Colorado", "Utah", "Alaska", "California"],
        correctAnswer: [3]
    },
    {
        question: "Through how many states does the Appalachian National Scenic Trail pass?",
        choices: ["10", "14", "9", "12"],
        correctAnswer: [1]
    },
    {
        question: "Which of the following is not one of Utah's 'Mighty 5' National Parks?",
        choices: ["Arches", "Capitol Reef", "Bryce Canyon", "Badlands"],
        correctAnswer: [3]
    },
    {
        question: "What national park is home to the deepest lake in the U.S.?",
        choices: ["Lake Clark National Park", "Kenai Fjords National Park", "Crater Lake National Park", "Great Basin National Park"],
        correctAnswer: [2]
    },
    {   
        question: " What is the smallest national park?",
        choices: ["Virgin Islands National Park", "Hot Spring National Park", "Cuyahoga Valley National Park", "Mesa Verde National Park"],
        correctAnswer: [1]
    }
]
//method to show/hide relevant question data (want questions to appear on browser one at a time)


//Tally correct answers
for(i=0; i<questions.length; i++) {
    if (userInput === questions.correctAnswer) {
totalCorrectAnswers.push(userInput[i])
}

}


const playButton = document.querySelector('button')
const buttonGroup = document.querySelector('.button-group')
let score = document.querySelector("h2")
//Start Game - display first question and choices
playButton.addEventListener('click', function() {
    const set0 = document.querySelector('#choice0')
    const set1 = document.querySelector('#choice1')
    const set2 = document.querySelector('#choice2')
    const set3 = document.querySelector('#choice3')
    set0.innerHTML = questions[0].choices[0]
    set1.innerHTML = questions[0].choices[1]
    set2.innerHTML = questions[0].choices[2]
    set3.innerHTML = questions[0].choices[3]
    playButton.innerHTML = questions[0].question
    buttonGroup.classList.add('block')
})
//check answers after game is over scenario: 
function renderQuestion(){
    let game = document.querySelector("game");
    if(userState >= questions.length) {
    game.innerHTML = "Score: " 
    } 
}
//validation
// for (var i = 0; i <= questions.length; i++) {
//     if(questions[i]===null )
// }
// const answers = document.getElementById('answers')
// console.log(answers.dataset)

// document.body.addEventListener('click', evt => {
//     if (event.target.nodeName === "choice3") {
//     console.log("Clicked correct", event.target.textContent);
//     }
// });
// set buttonGroup setAttribute to ('data-index',answer)
// buttonGroup.addEventListener('click',function(event){
//     const checkSelection = event.target.dataset.index
//     console.log(checkSelection)
// })

// for(i=0; i< questions.length; i++){
//     if(questions[i] === correctAnswers[i]) {
//       question =  
//     }
//     if(choice == questions[])
// }

//Timer Function: 
//method to countdown: setInterval(countdown, 1000)
//method to track and display time remaining: getTime(), Math.floor
// let seconds
// let countdownTimer = setInterval(createTimer,1000)
