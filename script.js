//method to show/hide relevant question data (want questions to appear on browser one at a time)
//--> use innerHTML?
//method to keep track of user state: 
//--> store user answer
//--> check if correct
//--> track score (how many user answers are correct)
//--> how many questions left 

//--> reset and show next question after select next button  and/or after 30 seconds is up


//create array of all questions
let questions = [{
        question: "What is the newest national park?",
        choices: ["Congaree", "Big Bend", "Mount Rainier", "Great Sand Dunes"],
        correctAnswer: "Great Sand Dunes"
    },
    {
        question: "What is the most visited park in the National Park System?",
        choices: ["Acadia", "Grand Canyon", "Great Smoky Mountains", "Yellowstone"],
        correctAnswer: "Great Smoky Mountains"
    },
    {
        question: "Which of the following exists within the boundaries of a national park?",
        choices: ["The highest point in North America", "The longest cave system in the world", "The deepest lake in the U.S.", "All of the above" ],
        correctAnswer: "All of the above"
    }
]

let answers
let results


//method to countdown: setInterval()
//method to track and display time remaining: getTime(), Math.floor
let seconds


//will need events for answer buttons: 
let button = document.querySelector('button')