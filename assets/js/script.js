

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

/**
 * Determine elements and buttons
 */
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
/* 
* Question screen functions
*/
// Hide questions before quiz start and after quiz finished
function hideQuestions() {

}
// Display questions while quiz is active
function showQuestions() {

}

/* 
* Welcome screen functions
*/
const welcomeContainer = document.getElementById("welcome-container");
const startButton = document.getElementById("start-btn");
// Display welcome screen before game start and when Play Again clicked
function displayWelcome() {
    welcomeContainer.style.display = "block"
}

window.onload = function() {
    displayWelcome();
}
// Hide welcome screen on 'START' button click
function hideWelcome() {
    welcomeContainer.style.display = "none";
}
document.getElementById("start-btn").onclick = function() {
    hideWelcome();
};



/*
* Final Score screen functions
*/
// Hide the final score screen until quiz complete
function hideFinalScore() {

}
// Display final score screen when quiz complete
function displayFinalScore() {

}