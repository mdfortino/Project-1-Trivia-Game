User Stories: 
* Game starts when user clicks "test your knowledge" button
* First Question and Choices Appear
* User clicks 1 Choice (cannot click more than 1 Choice)
* store User Choice, Check if Correct
* Next question appears after User clicks Correct Answer and/or if Timer of 30 seconds is up
* If User clicks Wrong Answer, alert "Wrong" with correct answer/fact blurb pop-up
* For every Question, Display: how many Questions Left, how much Time Remaining, and how many Correct
* Once Last Question is Answered, Display "Thanks for Playing" with image and option to reset game

Plan to execute user stories: 
* Add event listener to start game button (alert)
* Make button show question
* Make button show choices buttons (button group)
* Add content(choices) to choices buttons
* Add event listeners to each choice button

* If choice is correct:
* add to score (total +=1)
* display the scoreboard with updated score (DOM)
* move to next question
* If choice is wrong:
* If choice button selected is wrong, display next question (DOM)

