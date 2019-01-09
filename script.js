//method to show/hide relevant question data (want questions to appear on browser one at a time)
//click on "Test Your Knowledge" Button
//print Question[0,0] (first question)
//print Choices[0,1] (first choices)
//Click Choice (store User Choice, Check if Correct)
//Click "thank you, next" Button 
//print Question[1] (second question), second choices...go through 10 questions and choices
function toggleButton() {
    //get the next button
    let nextButton = document.getElementById('next')
} 

//--> track score (how many user answers are correct)
//--> how many questions left 

//--> reset and show next question after select next button  and/or after 30 seconds is up

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
console.log(questions[0].question)

// const choice = document.getElementById('choice1')
let newDiv = document.createElement("div")
let newParagraph = document.createTextNode("Test");
newDiv.appendChild(newParagraph)
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