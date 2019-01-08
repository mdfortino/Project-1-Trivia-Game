//method to show/hide relevant question data (want questions to appear on browser one at a time)
//--> use innerHTML?
//method to keep track of user state: 
//--> store user answer
//--> check if correct
//--> track score (how many user answers are correct)
//method to countdown: setInterval()
//--> reset and show next question after selection made and/or after 30 seconds is up
//method to track and display time remaining: getTime(), Math.floor

//create array of all questions
let questions = [{
                question: "What is the newest national park?",
                choices: ["Congaree", "Big Bend", "Mount Rainier", "Great Sand Dunes"],
                correctAnswer: "Great Sand Dunes" }
                        
]

let answers 
let results 

let seconds 


//will need events for answer buttons: 
let button = document.querySelector('button')