//Task 1
let item1 = 10;
let item2 = 29;
let item3 = 76;

let totalCost = item1 + item2 + item3;

console.log("The total cost of the items is: $"+ totalCost);

//Task 2
let num1 = 2;
let num2 = 78;
let num3 = 1;

let average = (num1 + num2 + num3) / 3;

console.log("The average is", average);

//Task 3
let numb1 = 72;{
    if (numb1 % 2 == 0) {
        console.log(numb1, "is an even number");
    }
    else{
        console.log(numb1, "is an odd number");
    }
}

//Task 4
let price = 7253;
let discount = 50;

let discountedAmount = (price * discount) / 100;
let discountedPrice = price - discountedAmount;

console.log("The discounted price is: $"+ discountedPrice);

//Bonus Task
let finalPrice = 923;
let discountPercent = 50;

let originalPrice = finalPrice / (1 - discountPercent / 100);

console.log("The original price before the discount was: $"+ originalPrice);