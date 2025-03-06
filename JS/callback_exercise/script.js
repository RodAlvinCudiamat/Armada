//Exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

console.log(calculate(5, 3, add));      // Output: 8
console.log(calculate(3, 2, multiply)); // Output: 6
console.log(calculate(7, 5, subtract)); // Output: 2
console.log(calculate(100, 5, divide)); // Output: 20

//Exercise 2
function delayedMessage(message, delay, callback1, callback2) {
    callback1(); 

    setTimeout(() => {
        callback2(message); 
    }, delay);
}

delayedMessage(
    "Hello, world!", 
    2000, 
    () => console.log("Delay started..."), 
    (msg) => console.log(msg) 
);

//Exercise 3
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break; 
        }
    }
}

repeatTask(5, function(index) {
    console.log("Iteration:", index);
    if (index === 2) return false; 
});



