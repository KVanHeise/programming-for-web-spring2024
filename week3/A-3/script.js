// Create a quiz game using these parameters:

// Required:
// Ask the user randomized questions using the p5 text commands.
// Allow the user to respond using a p5 dom text input with submit button
// Remove correct answers from those being asked
// Provide feedback to the user regarding the results of their answer (was it correct or not).
// If the user misses 5 or more questions, display feedback that the user has lost.
// If the user correctly answers all the questions, display feedback that the user has won.

// Optional:
// Give the user the ability to restart the quiz.
// Display the number of incorrect answers or the number of incorrect answers until they loose.

let questionInput;
let currentQuestion;
let response;
let errorCount = "0";
let responseColor = "green";
let submitAnswerButton;
let heading;
let statements = [
    {question: "What color do you get when you combine yellow and blue?", answer: "green"},
    {question: "What color do you get when you combine red and blue?", answer: "purple"},
    {question: "What color do you get when you combine yellow and red?", answer: "orange"},
    {question: "When black is added to a color, it is called a:", answer: "shade"},
    {question: "When white is added to a color, it is called a:", answer: "tint"},
    {question: "Which color is opposite purple on the color wheel?", answer: "yellow"}
];

function next() {
    if (statements.length < 1) {
        alert("Congratulations! You've won!");
        return;
    }
    else if(errorCount > 4) {
    alert("You've lost! Better luck next time!");
    return;
    }

    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}

function checkQuestion(){
    if (currentQuestion.answer === questionInput.value()){
        //remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        // this is the correct condition
        response = "Correct! Next Question!";
        responseColor = "green";
    }
        else {
            //this is the wrong answer condition and tracker
            errorCount++;
            response = "Sorry, that's incorrect. Please try again!";
            responseColor = "red";
        }

        currentQuestion = next();
        questionInput.value("");
        if (currentQuestion) {
            message = currentQuestion.question || "";
        }
}

currentQuestion = next();
let message = currentQuestion.question;

function setup()
    {
    createCanvas(800, 600);
    heading = createElement("h2", "Color Quiz");
    heading.position(100, 100);
    questionInput = createInput("");
    questionInput.size(250, 24);
    questionInput.position(100, 220);
    submitAnswerButton = createButton("submit answer");
    submitAnswerButton.size(250, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 260);
}

function draw() {
    background("lightblue");
    fill("purple");
    textSize(24);
    text(message, 100, 200);

    fill(responseColor);
    text(response, 100, 350);
}