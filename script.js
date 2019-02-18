//questions/facts were derived from the following source: https://www.greatamericancountry.com/how-well-do-you-know-our-national-parks

const questions = [{
        id: 0,
        question: "What National Park contains the highest peak in North America?",
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
        question: "Which of the following exists within the boundaries of a national park?",
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
        question: "What national park is home to the longest cave system in the world?",
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
        question: "Through how many states does the Appalachian National Scenic Trail pass?",
        choices: ["10", "14", "9", "12"],
        correctAnswer: "14",
        fact: "Wrong! The Appalachian Trail passes through 14 states including Georgia, Tennessee, Virginia, West Virginia, Maryland, Pennsylvania, New Jersey, New York, Connecticut, Massachusetts, Vermont, New Hampshire and Maine."
    },
    {
        id: 7,
        question: "Which of the following is not one of Utah's 'Mighty 5' National Parks?",
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

const playButton = document.querySelector("button");
const question = document.getElementById("question")
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
const againDiv = document.getElementById("again")
const timer = document.getElementById("timeRemaining")

let score = 0;
let count = 10;
let currentIndex = 0;

scoreBoard.innerHTML = "questions correct: " + score;
counter.innerHTML = "questions left: " + count;
scoreBoard.style.display = "none";
counter.style.display = "none";
timer.style.display = "none"

playButton.addEventListener("click", function () {
    scoreBoard.style.display = "block";
    counter.style.display = "block"
    timer.style.display = "block"
    playButton.style.display = "none"; 
    displayNextQuestion();
});

function displayNextQuestion() {
    question.innerHTML= questions[currentIndex].question;
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
    if (currentIndex < 10) {

        let userInput = document.querySelector('input[name="answer"]:checked').value;
        if (userInput === questions[currentIndex].correctAnswer) {
            alert("Correct!");
            score++
            scoreBoard.innerHTML = "questions correct: " + score;
        } else {
            alert(questions[currentIndex].fact)
        }
        currentIndex++;
        count--
        counter.innerHTML = "questions left: " + count;
        if (currentIndex < 9) {
            displayNextQuestion()
        } else {
            results.innerHTML = "Thank you for playing! You answered " + score + " correctly." 
            // + " Click the button above to play again." 
            question.style.display = "none";
            choiceButtonGroup.style.display = "none";
            // playButton.style.display = "inline-block";
            scoreBoard.style.display = "none";
            counter.style.display = "none"
            timer.style.display = "none"
        }

    }

}

