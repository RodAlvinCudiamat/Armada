//Task1
let number = 5;

for (let i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
}

//Task2
let n = 16;
let result = 0;

for (i = 1;i <=n; i++){
    result += i;
}
console.log(`The sum of the first ${n} numbers is: ${result}`);

//Task3
let integers = [1,24,5654,234,1232];

for (i = 0;i < integers.length; i++){
    console.log("Array Element:",integers[i]);
}

//Task4
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let stars = ""; 
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars); 
}

//Task5
let numbers = [1, 7, 18, 2236, 41233];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log("Reversed Element:",numbers[i]);
}
