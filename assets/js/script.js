

/*
* Determine Questions Array
*/
const questions = [
    {
        question: "What does Seoul, the South Korean capital, mean in the Korean language?",
        answers: [
            {text: "Soul", correct: false},
            {text: "Heart", correct: false},
            {text: "Capital", correct: true},
            {text: "City", correct: false},
        ]
    },
    {
        question: "How many words in the English language rhyme with purple?",
        answers: [
            {text: "Three", correct: false},
            {text: "Zero", correct: true},
            {text: "One", correct: false},
            {text: "Four", correct: false},
        ]
    },
    {
        question: "What sport is known as The Sweet Science?",
        answers: [
            {text: "Boxing", correct: true},
            {text: "Football", correct: false},
            {text: "Surfing", correct: false},
            {text: "Snooker", correct: false},
        ]
    },
    {
        question: "In what year were the first Air Jordan sneakers released?",
        answers: [
            {text: "1982", correct: false},
            {text: "1990", correct: false},
            {text: "1984", correct: true},
            {text: "1988", correct: false},
        ]
    },
    {
        question: "What do people hang over their doors on New Years Eve in Greece?",
        answers: [
            {text: "Olives", correct: false},
            {text: "Tomatoes", correct: false},
            {text: "Garlic", correct: false},
            {text: "Onions", correct: true},
        ]
    },
    {
        question: "Shito pepper is a commonly used condiment in which part of the world?",
        answers: [
            {text: "East Asia", correct: false},
            {text: "West Africa", correct: true},
            {text: "North America", correct: false},
            {text: "Southern Europe", correct: false},
        ]
    },
    {
        question: "Which two pieces are moved in a castling manoeuver in chess?",
        answers: [
            {text: "King and Rook", correct: true},
            {text: "Queen and Bishop", correct: false},
            {text: "Knight and Pawn", correct: false},
            {text: "King and Queen", correct: false},
        ]
    },
    {
        question: "How much Monopoly money do you collect for finishing second in a beauty contest?",
        answers: [
            {text: "$10", correct: true},
            {text: "$20", correct: false},
            {text: "$50", correct: false},
            {text: "$100", correct: false},
        ]
    },
    {
        question: "What is the longest someone has gone without sleeping?",
        answers: [
            {text: "96 hours", correct: false},
            {text: "182 hours", correct: false},
            {text: "304 hours", correct: false},
            {text: "266 hours", correct: true},
        ]
    },
    {
        question: "Which country hosted the first Olympic Games in 1896?",
        answers: [
            {text: "Italy", correct: false},
            {text: "Egypt", correct: false},
            {text: "Greece", correct: true},
            {text: "Mexico", correct: false},
        ]
    }
];

/* 
* Welcome screen functions
*/
const welcomeContainer = document.getElementById("welcome-container");
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
// Display welcome screen before game start and when Play Again clicked
function displayWelcome() {
    welcomeContainer.style.display = "block"
    // Hide quiz container
    quizContainer.style.display = "none";
}

window.onload = function() {
    displayWelcome();
}
// Hide welcome screen on 'START' button click
function hideWelcome() {
    // Change the display of Welcome screen to none
    welcomeContainer.style.display = "none";
}
document.getElementById("start-btn").onclick = function() {
    // Call the hide welcome function on start button click.
    hideWelcome();
    // Call start quiz function after welcome container hidden.
    startQuiz();
};

/**
 * Determine elements and buttons
 */
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-btn")
// Disable nextButton (will be targeted by function to enable once question answer selected)
nextButton.disabled = true;

let currentQuestionIndex = 0;
let score = 0;
/* 
* Question screen functions
*/
// Display questions while quiz is active
//Assign first question from array and starting score of zero, then display question.
function startQuiz(){
    // Display quiz container
    quizContainer.style.display = "block"
    // Set current question index and score values to 0
    currentQuestionIndex = 0;
    score = 0;
    // Apply text value to next button
    nextButton.innerHTML = "Next"
    // Call function to show next question
    showQuestion();
}

function showQuestion() {
    // Set current question to the first question in the 'qeustions' array above.
    let currentQuestion = questions[currentQuestionIndex];
    // Ensure question number displays as 1 higher than the initial index (0).
    let questionNumber = currentQuestionIndex + 1;
    // Apply text to the question area for each current question.
    questionElement.innerHTML = "Q" + questionNumber + ": " + currentQuestion.question;
    // Disable nextButton at the start of each question.
    nextButton.disabled = true;
    // Run updateAnswerButtons function for current question.
    updateAnswerButtons();
}

/**
 * Update Answer Button content for every question.
 */
function updateAnswerButtons() {
    // Remove existing/previous question elements to be replaced by new ones.
    const answerButtonsDiv = document.getElementById("answer-buttons");
    while (answerButtonsDiv.firstChild) {
        answerButtonsDiv.removeChild(answerButtonsDiv.firstChild)
    }
    // Get the current question being displayed
    let currentQuestion = questions[currentQuestionIndex];
    // Create new buttons for each of the answers to the current question
    currentQuestion.answers.forEach((answer, index) => {
        const newButton = document.createElement("button");
        // Assign same class name to buttons.
        newButton.className = "answer-btn";
        // Assign text from answers to the buttons
        newButton.textContent = answer.text;

        // Attach the new button to the "answer-buttons" div
        answerButtonsDiv.appendChild(newButton);
        if (answer.correct) {
            newButton.dataset.correct = answer.correct;
        }
        // Add listener to newButton's click, and execute selectAnswer function
        newButton.addEventListener("click", selectAnswer);
    });
}


/*
* Select answer 
*/
// Highlight selected answer green/red based on correct/incorrect answer.
// Code inspiration taken from GreatStack on Youtube. See readme.md for credits.
function selectAnswer(event) {
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
};

/**
 * Define increment score function to increase user score on correct answer
 */
// Gets the current score from the DOM and increments by 1
function incrementScore() {
    // Increment score by 1
    score++;
    // Target innerHTML of score element with updated score
    document.getElementById("score").textContent = "Score " + score +"/10";
}

/**
 * Next Question function
 */
// Enable the next button to iterate to the next question in the questions array once clicked.
document.getElementById("next-btn").onclick = function nextQuestion() {
    // Define nextButtonDisabled and enable the next button ONLY when the question answer has been selected.
    let nextButtonDisabled = document.getElementById("next-btn").disabled = false;
    if (!nextButtonDisabled){
        nextButtonDisabled = true;
        let currentQuestion = questions[currentQuestionIndex];
        // Increase question index by 1 each time
        currentQuestionIndex ++;
        // Set rule that if the question # is longer than the questions index, display final score
        if (currentQuestionIndex >= questions.length) {
            displayFinalScore();
        // Otherwise, show next question.
        } else {
            showQuestion();
        }
    }
};

/*
* Final Score screen functions
*/
// Define elements to target
const finalScoreContainer = document.getElementById("final-score-container");
// Hide the final score screen until quiz complete
function hideFinalScore() {
    finalScoreContainer.style.display = "none"
}
// Display final score screen when quiz complete
function displayFinalScore() {
    finalScoreContainer.style.display = "block";
    // Hide quiz container
    quizContainer.style.display = "none"
    // Hide score display on final score screen
    document.getElementById("score-display").style.display = "none"
    // Amend text content of final-score to 'score' value
    document.getElementById('final-score').textContent = "Final Score " + score + "/10";
}

/**
 * Play Again function
 */
// Reloads the window to start again from the beginning of the quiz
// Define playAgain as play-again-btn
const playAgain = document.getElementById("play-again-btn");
// Add event listener on click of playAgain button to call resetQuiz function
playAgain.addEventListener("click", resetQuiz);
// Define the resetQuiz function
function resetQuiz() {
    // set the function to reload the page using default javascript function
    window.location.reload();
}
