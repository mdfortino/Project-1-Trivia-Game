# Project-1-Trivia-Game
Description:
What project is/should be used for:
The project is a trivia game of national parks. The problem that this game solves is the user needs a way to test their knowledge of national parks. 

# Brief Example:
If you click on the "test your knowledge button", the game starts: first question and choices appear. 
```playButton.addEventListener('click', function(){
    playButton.innerHTML = questions[0].question
    choiceButtonGroup.classList.add('block')
    choiceButton0.innerHTML = questions[0].choices[0]
    choiceButton1.innerHTML = questions[0].choices[1]
    choiceButton2.innerHTML = questions[0].choices[2]
    choiceButton3.innerHTML = questions[0].choices[3]
})
```

# List of Features/User Stories:
I planned desired user features during the development stage and categorized them into the following Bronze, Silver and Gold Lists.

# Bronze: 
Self-scoring
HTML with questions and choices and basic CSS
Pass HTML and CSS validator

# Silver:
HTML with timer
Clean CSS/style 
2 trivia categories to select from
Display fact about national park (pop-up) when user selects wrong or correct choice

# Gold:
HTML with beautiful CSS layout
Ability to create teams
Ability to compete with other player(s)/teams
Ability to move to different levels 

# Which completed/yet to complete
I completed the bronze requirements: 
HTML with basic CSS
Questions and choices appear
Score updates after User answers each question
Score displays in browser for each question 
Next question displays when User clicks on any choice button

My next steps to move to Silver plan are: 
add a timer
create clean CSS style 

# List of Technologies Used:
HTML, CSS, JavaScript

# Installation Instructions/Getting Started:
Click the following link to render game in browser: https://mdfortino.github.io/Project-1-Trivia-Game/ 

Click the “test your knowledge” button and take the multiple-choice trivia quiz (there are 10 questions). For now, just test your knowledge on one question (since not all questions are displaying). 

# Contribution Guidelines:
To contribute to the code, identify bugs, and propose improvements, please see the below links: 
Link to project’s main repository: https://github.com/mdfortino/Project-1-Trivia-Game 
Link to project’s issue tracker: https://github.com/mdfortino/Project-1-Trivia-Game/issues 
