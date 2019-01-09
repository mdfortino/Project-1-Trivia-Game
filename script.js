//method to show/hide relevant question data (want questions to appear on browser one at a time)
//--> use innerHTML? append/prepend...

//method to keep track of user state: 
//--> store user answer
//--> check if correct
//--> track score (how many user answers are correct)
//--> how many questions left 

//--> reset and show next question after select next button  and/or after 30 seconds is up


// let currentQuestion
// let correctAnswers 
let questions = [{
        question: "What is the newest national park?",
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
        choices: ["Mammoth Cave National Park", "", ],
        correctAnswer: [0]
    },
    {

    },

]
console.log(questions[0].question)
// function nextQuestion() {
//     let 
// }
// for (i = 0; i < questions.length; i++){

// }

const button = document.querySelector('button')
console.log(button)

button.addEventListener('click', function () {
  alert("You clicked a button!")
})

// let answers
// let results


//method to countdown: setInterval()
//method to track and display time remaining: getTime(), Math.floor
// let seconds
// let countdownTimer = setInterval(createTimer,1000)
// //will need events for answer buttons: 
// let button = document.querySelector('button')