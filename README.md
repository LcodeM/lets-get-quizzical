# Let's Get Quizzical

![LGQ Logo](https://github.com/LcodeM/lets-get-quizzical/blob/main/documentation/lgq_logo.png)

<strong>[LINK TO LIVE SITE HERE](https://lcodem.github.io/lets-get-quizzical/)</strong>

## Introduction

Let's Get Quizzical is a general knowledge quiz, with a friendly and simple design, aimed at testing the user's knowledge across a variety of topics with questions ranging in difficulty.

The game is designed to display whether the user has chosen a correct or incorrect answer on click, and preventing them from choosing multiple answers to cheat. Scores are tracked as the user progresses through the questions, with a final score displayed at the end, as well as the option to play again.

Users should enjoy the different question topics, and aim to want to beat their previous score, where possible.

![Responsive Windows]()

## User Experience

### Project Goal

To create an easily playable, attractive quiz game that has basic functionality to engage the user, as well as being playable from anywhere.

### User Goals

- To easily access and play a fun quiz online from anywhere.
- Find clear intstructions on how to play the game before it begins.
- To be challenged to some degree by a range of questions with different topics.
- Be able to replay the quiz whenever they like.

### Site Owner Goals

- To provide the user with clear instructions on how to play the game.
- To ensure that the game is functioning properly for user experience.
- To create repeat users through replayability, as well as not offering the correct answers upon failure to select them.

### Target Audience

- People looking to have a short but enjoyable break that teases the brain.
- Competitive players who want to get the highest score possible.
- Knowledge seekers looking to find out more about different topics, based on the questions and their answers, in an interactive way.

### User Stories

#### First Time User Goals

- As a first-time user, I want to be able to see the game's instructions before I begin. 
- As a first-time user, I want to be able to easily navigate through all questions.
- As a first-time user, I want to be able to see my score as I progress through the questions.
- As a first time user, I want to be able to easily access the quiz from anywhere, on any device.

#### Returning User Goals

- As a returning user, I want to be able to easily access the quiz to play with my friends.
- As a returning user, I want to be able to play again and try to beat my previous score.

#### Frequent User Goals

- As a frequent user, I want to be able to choose from different options of a variety of quiz topics to keep it fresh and interesting.

### Site Structure

Let's Get Quizzical utilises a single index.html page, which in turn utilises javascript functions to show and hide various sections from the user, depending on the actions they take on the site (buttons pressed, finished questions etc).

Each section aims to serve a different purpose. The welcome-container acting as the introdcution to the game, and how to play it. The quiz-container, which is hidden upon the page load, holds the questions, and is the main visible element of the site until all questions are answered. Finally, the final-score-container is displayed only when all questions have been answered, displaying the user's final score, as well as the 'Play Again' button which refreshes the page and starts again from the welcome-container.

All content is centered to the middle of the screen, as to prevent the need for scrolling, while still maintaining a good design layout.

### Wireframes

Disclaimer: Please be aware that all links open in the same window, make sure to manually open in a new tab.



### Design

#### Colour Scheme

The colours used for the site were white, two shades of purple for div backgrounds and element highlights, green and red for correct and incorrect button highlighters respectively, and black for the font colour.

- #FFFFFF was used for the background colour.
- #7D80DA was used for div background colours.
- #57467B was used for highlighting and accents.
- #ЗАВ795 was used to highlight a correct answer.
- #AC3931 was used to highlight an incorrect answer.

![Colour Scheme](https://github.com/LcodeM/lets-get-quizzical/blob/main/documentation/lgq_colour_scheme.png)

#### Typogrophy / Fonts

The font family 'Chakra Petch' was downloaded and used from Google Fonts, as it provides an arcade like feel to the game content. This font was used for all text across the website.

![Font Family](https://github.com/LcodeM/lets-get-quizzical/blob/main/documentation/chakra_petch_font_family.png)
[Google Font](https://fonts.google.com/specimen/Chakra+Petch?preview.text=Let%27s%20Get%20Quizzical&query=chakra)

#### Imagery

The only images used for this project were the favicons 'Alien Monster'.

![Alien Monster](https://github.com/LcodeM/lets-get-quizzical/blob/main/android-chrome-192x192.png)

## Features

### Existing Features

#### Navigation

Navigation on the site is controlled using JavaScript and event listeners on buttons:

- Users gain access to the quiz questions upon clicking the 'start' button in the welcome screen (which is displayed on window.load). This ensures that players have been presented with the games instructions prior to beginning the quiz. This is essential, as users need to understand that their questions are locked in upon selection, and no other answers will be available to choose unless they play again. 

- Once questions are displayed, users are required to choose an answer before the 'next' button is enabled, allowing them to continue. 

- Users must answer all 10 questions in order to access the 'final score' screen, upon which they have the opportunity to 'play again', reloading the page to the welcome screen. 

#### Welcome Container



#### Welcome Container



#### Welcome Container



### Future Features and Improvements to be Implemented

Some future features that would be a good addition to the site would be:

- Various different categories and a larger list of questions, which vary in difficulty.
- A timer, depending on the degree of difficulty, that users have to answer all questions.
- A leaderboard feature to store user scores and display highest.
- A more advanced interface.

## Technologies

### Languages

The list of technologies used for completion of the site are as follows:

- [![HTML5](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) - used to write structure and foundation of code for website.
- [![CSS](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) - used as styling language for all content and page structure on site.
- [![JavaScript](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) - used to implement interactivity and functionality, as well as manipulate elements on the site.
- [![Git](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) - used to track changes in code and version control.

### Other Tools

- [GreatStack](https://www.youtube.com/watch?v=AF6vGYIyV8M) GreatStack on YouTube for video tutorials for pop-up modals and highlighting right/wrong answers
- [Florin Pop](https://www.youtube.com/watch?v=r_PL0K2fGkY)  Florin Pop on YouTube Create a popup/modal in Javascript tutorial
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) window.onload event support for opening welcome container.
- [Box Shadow](https://getcssscan.com/css-box-shadow-examples) box-shadow code.
- [Stack Overflow](https://stackoverflow.com/questions/72843561/when-building-a-quiz-app-in-javascript-how-can-i-one-question-to-the-next) support with iterating over questions array for active question.
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) forEach array instances for questions/answers and[Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload) location.reload function for reloading the page to reset the game once quiz complete.
- [SheCodes](https://www.shecodes.io/athena/121718-how-to-use-transform-translate-50-50-to-center-an-element-in-css#:~:text=The%20transform%3A%20translate(%2D50,vertically%20within%20its%20parent%20container)) Welcome container styling support - centre aligning the div.
- [Phind](http://www.phind.com) Support explaining why my score wasn’t incrementing. Issue was with the textContent not being updated to replace what was already in there, and hadn’t defined the score incrementation properly. Also needed to move the incrementScore function to only call if the selectAnswer was correct within selectAnswer function.
- [Balsamiq](https://balsamiq.com/wireframes/desktop/#) for wireframe creation.

## Deployment

### Deploying to Github Pages

Let's Get Quizzical was developed in VS Code and deployed to GitHub pages.

The steps to deploy are:

- Navigate to the GitHub repository, or click [here](https://github.com/LcodeM/lets-get-quizzical/tree/main).
- Go to the 'Settings' tab and then to Pages on the left-hand side.
- From the Source section, select Branch 'main' from the dropdown menu, and make sure '/(root)' is selected next to it. Then click 'Save'.
- Once complete, you will see a message at the top of the page, and a link to the deployed site will be published (this may take a moment).

You can find the link to the live version [here](https://lcodem.github.io/lets-get-quizzical/).

To create a local copy of this repository, copy and paste https://github.com/LcodeM/lets-get-quizzical.git into your IDE workspace, or use "git clone https://github.com/LcodeM/lets-get-quizzical.git" in your terminal.

## Testing

See [TESTING.md](https://github.com/LcodeM/lets-get-quizzical/blob/main/TESTING.md).

## Credits

- [GreatStack](https://www.youtube.com/watch?v=AF6vGYIyV8M) GreatStack on YouTube for video tutorials for creating array to iterate over answers and highlighting right/wrong answer.
Section of code inspired by tutorial:
'''function selectAnswer(event) {
    // Assign the selected button as the event target
    const selectedButton = event.target;
    // Define isCorrect to be the correct answer from the dataset.
    const isCorrect = selectedButton.dataset.correct === "true";
    // Color highlight depending on answer selected
    if(isCorrect) {
        // If isCorrect = true, assign the class "correct-answer" to target the style in our css
        selectedButton.classList.add("correct-answer");
        // if answer is correct, call increment score function to add 1 to score
        incrementScore();
    } else {
        // if isCorrect = false, assign the class "incorrect-answer" to target the style in our css
        selectedButton.classList.add("incorrect-answer");
    }
    // Target "answer-buttons" div and check each question answer in the array to be correct/incorrect
    let answerButtonsDiv = document.getElementById("answer-buttons");
    Array.from(answerButtonsDiv.children).forEach(button => {
        // If answer in array is correct, create a new class for that button called "correct".
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        // Disable all buttons.
        button.disabled = true;
    });
    // Enable next-btn to proceed to next question
    nextButton.disabled = false;
};''' 
- [Alex Crabbe](https://github.com/alexrobincrabbe) for his time and support in helping me troubleshoot issues with my code related to the nextQuestion function and disabling the 'next' button inside question-container.
