// Task1
let score = 91; 
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score <= 89) {
    grade = "B";
} else if (score >= 70 && score <= 79) {
    grade = "C";
} else if (score >= 60 && score <= 69) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Score:", score);
console.log("Grade:", grade);

//Task2
let temperature = 10; 
console.log("Temperature:",temperature+"°C");

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

//Task3
let age = 21; 
console.log("Age:",age);

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}

//Task4
let age2 = 14; 
let isMember = false; 

let ticketPrice;
console.log("Age:",age2,"Membership:",isMember);

if (age2 < 12) {
    ticketPrice = "Free";
} else if (age2 >= 12 && isMember) {
    ticketPrice = "$10";
} else {
    ticketPrice = "$15";
}

console.log("Ticket Price:", ticketPrice);

//Task5
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(1995)); 
console.log(isLeapYear(1891)); 

