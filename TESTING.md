# Testing

## Compatability

All pages have been tested for compatability in different browsers, including Google Chrome (default browser), Safari and Mozilla Firefox.

![Browser Compatability](https://github.com/LcodeM/lets-get-quizzical/blob/main/documentation/responsive_design.gif)

## Responsiveness



## Manual Testing

|Page Feature                        |Action(s)           |Expected result                                                                                                                           |Tested|Passed/Failed|Comments|
|------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------|------|-------------|--------|
|Welcome container display           |Window load         |When the page loads, the welcome display is visible to the user.                                                                          |Yes   |Pass         |        |
|Start button                        |Click start button  |When clicked, welcome container is hidden and question container is displayed                                                             |Yes   |Pass         |        |
|Select answer buttons disabled      |Click answer        |When an answer button is clicked by the user, all other buttons become disabled.                                                          |Yes   |Pass         |        |
|Correct/Incorrect answer highlighted|Click answer        |When an answer button is clicked, the chosen button is highlighted either green or red depending on correct/incorrect answer respectively.|Yes   |Pass         |        |
|Next button                         |Click answer        |When an answer button is clicked, the next button is enabled.                                                                             |Yes   |Pass         |        |
|Next button                         |Click next button   |Once enabled, next button clicked iterates to next question in array and is then disabled again.                                          |Yes   |Pass         |        |
|Final next button                   |Click next button   |Clicking next button on question ten hides question container and displays final score container                                          |Yes   |Pass         |        |
|Score increment                     |Click correct answer|Clicking correct answer to each question increments score text content by 1 each time.                                                    |Yes   |Pass         |        |
|Final score                         |Display             |Final score displays the users total score from all correct answers                                                                       |Yes   |Pass         |        |
|Play again button                   |Click play again    |Reloads the page to welcome screen for user to play quiz again.                                                                           |Yes   |Pass         |        |


## Validator Testing

### HTML 

Initial errors reported: None, one warning related to empty h3 heading. Heading content updated by javascript function.

![html validation](https://github.com/LcodeM/lets-get-quizzical/blob/main/documentation/html_validation_pass.png)

### CSS

Initial errors reported: None

![css validation](https://github.com/LcodeM/lets-get-quizzical/blob/main/documentation/css_validation_pass.png)

### JavaScript

Initial errors reported: None

![javascript validation](https://github.com/LcodeM/lets-get-quizzical/blob/main/documentation/jshint_validation.png)

### Lighthouse Report / Performance

![lighthouse score](https://github.com/LcodeM/lets-get-quizzical/blob/main/documentation/lighthouse_score.png)

Due to limited links and imagery on the page, the page achieved high scores for all categories.

## Bugs

### Solved Bugs

1: Struggling to enable modal popup on page load. 
Tutorial on modals from [YouTube](https://www.youtube.com/watch?v=r_PL0K2fGkY) . Define variables welcomeContainer and startButton, create function for displayWelcome and set display to “block” using 
```js
window.onload = function () {
  displayWelcome();
};
```

2: Struggling to format display of Welcome Container to fit exactly over questions container to hide it. [FIXED] Set top and left margins to 50% and then apply transform: translate (-50%, -50%) to centre within parent element (body). 
[Source](https://www.shecodes.io/athena/121718-how-to-use-transform-translate-50-50-to-center-an-element-in-css#:~:text=The%20transform%3A%20translate(%2D50,vertically%20within%20its%20parent%20container.))

3: All buttons still clickable and ‘correct’ answer not automatically highlighting ‘GREEN’ when incorrect answer selected. [FIXED]: created an array from the answer-buttons div to iterate over each child element (button) to check the answers in the dataset against the selected answer. If the dataset matches the answer, a new class is assigned to that answer (“correct”). After this, the buttons are set to disabled = true. [Source](https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack)

4: Once buttons disabled and nextButton disabled until select answer = true. welcomeContainer not showing up.. [FIXED]: This was due to incorrect code causing the rest of the functions to break.

5: Next button disabled until answer selected, but once next question is displayed, next-btn still enabled by default [FIXED] needed to define ‘nextButton.disabled = true;’ in showQuestion( ); function.
```js
  // Disable nextButton at the start of each question.
  nextButton.disabled = true;
  ```

6: finalScoreContainer not showing once final question answer selected and next button pressed. [FIXED] Code incorrect. Was: window.style.disaplay = “block”, should have been: 
```js
finalScoreContainer.style.display = “block”;
```

7: Final score not showing once all questions answered. [FIXED] used Phind.ai to explain why my score wasn’t incrementing. Issue was with the textContent not being updated to replace what was already in there, and hadn’t defined the score incrementation properly. Also needed to move the incrementScore function to only call if the selectAnswer was correct within selectAnswer function.

8: Play Again button not resetting game to default/starting again from the beginning. [FIXED]: Assign playAgain to play-again-btn on final score container, and add an event listener to click of playAgain button. Assign function resetQuiz with the action of reloading the window, causing the game to restart and call the displayWelcome function once again. [Source](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload).

9: mobile buttons not reacting to correct/incorrect answer selection styling. [FIXED] was due to incorrect css styling of buttons, including :hover feature which was overriding the background styling, then :active for mobile design which was not keeping the background after tap.

### Unsolved/Ongoing Bugs

No unresolved bugs to report.

## Mistakes

