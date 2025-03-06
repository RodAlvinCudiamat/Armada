// Task 1
function customFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]); 
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]

// Task 2
function countdown(start, callback) {
    let current = start;

    function next() {
        if (current >= 0) {
            callback(current); 
            current--; 
            setTimeout(next, 1000); 
        }
    }

    next(); 
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)


// Task 3
function createButton(buttonText, callback) {
    let button = document.createElement("button"); 
    button.textContent = buttonText; 
    button.addEventListener("click", callback); 
    document.getElementById("button-container").appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
    alert("Button Clicked!"); 
}

createButton("Click Me", buttonClicked);

// Task 4
function runTasks(tasks) {
    function executeTask(index) {
        if (index < tasks.length) {
            tasks[index](); 
            setTimeout(() => executeTask(index + 1), 1000);
        }
    }

    executeTask(0);
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  

// Task 5
function askQuestion(question, choices, correctAnswer, callback) {
    let userAnswer = prompt(`${question}\n${choices.map((choice, index) => `${index + 1}. ${choice}`).join("\n")}`);
    
    if (choices[userAnswer - 1] === correctAnswer) {
        callback(true);
    } else {
        callback(false);
    }
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
        alert("Correct!");
    } else {
        console.log("Wrong!");
        alert("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
