<script>
 
    //   fetch("https://the-trivia-api.com/v2/questions")
    //fetch("https://ci-swapi.herokuapp.com/api/")
    fetch("https://the-trivia-api.com/v2/session")
        .then(response => response.text())
        .then(data => displayData(data))
        /*  {
             document.getElementById("content").innerText = data.people;
         })
         */
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function displayData(data) {
        document.getElementById("content").innerText = data;
        //document.getElementById("content").json = data.people;
        //console.log(data.people)
    }
    
    </script>


// Mathematics

/*
wait fpr the page/DOM to load
add event listeners
*/
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                //alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                //alert(`You clicked ${gameType}`);                
            }
        })
    }
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
    runGame("addition");
    //runGame(calculatedAnswer[1])
});

/**
 * Main Game Loop
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`unknown game ${gameType}`);
        throw `unknown game ${gameType}. Abort, Abort`;
    }

}

/**
 * Check the users answer against correct answer
 */
function checkAnswer(gameType) {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    //let gt = gameType;
    let operator = document.getElementById("operator").innerText;
    //let operator = this.getAttribute("data-type"); 
    if (isCorrect) {
        alert("Well Done, Correct.");
        incrementScore();
    } else {
        alert(`Doh! ${userAnswer} ?? Wrong! can you ${operator} ? oh well, the correct answer is ${calculatedAnswer[0]}`)
        incrementWrongAnswer();
    }
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    runGame(calculatedAnswer[1]);
}

/**
 * Read the operands and operator from the DOM
 * Calculate the answer
 */
function calculateCorrectAnswer() {
    let a = parseInt(document.getElementById("operand1").innerText);
    let b = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [a + b, "addition"];
    } else if (operator === "x") {
        return [a * b, "multiply"];
    } else if (operator === "-") {
        return [a - b, "subtract"];
    } else if (operator === "/") {
        return [a / b, "division"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}, abort.`;
    }
}
/**
 * get current score count from DOM and increment it
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * get current incorrect score count from DOM and increment it
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(op1, op2) {
    document.getElementById("operand1").textContent = op1;
    document.getElementById("operand2").textContent = op2;
    document.getElementById("operator").textContent = '+';
}

function displaySubtractQuestion(op1, op2) {
    document.getElementById("operand1").textContent = op1 > op2 ? op1 : op2;
    document.getElementById("operand2").textContent = op1 > op2 ? op2 : op1;
    document.getElementById("operator").textContent = '-';
}

function displayMultiplyQuestion(op1, op2) {
    document.getElementById("operand1").textContent = op1;
    document.getElementById("operand2").textContent = op2;
    document.getElementById("operator").textContent = 'x';
}

function displayDivideQuestion(op1, op2) {
    document.getElementById("operand1").textContent = op1 * op2;
    document.getElementById("operand2").textContent = op2;
    document.getElementById("operator").textContent = '/';
}