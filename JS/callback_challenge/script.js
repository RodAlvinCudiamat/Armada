// Task 1
// Custom filter function that mimics Array.prototype.filter()
// Initialize an empty array to store filtered values
// I looped each element in the input array
// Check if the element satisfies the condition provided in the callback function
// Add element to result array if condition is met
// Return the new filtered array
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); 
    }
    return result;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled); // Output: [2, 4, 6]

// Task 2
// Custom filter function that mimics Array.prototype.filter()
// Initialize an empty array to store filtered values
// I looped each element in the input array
// Check if the element satisfies the condition provided in the callback function
// Add element to result array if condition is met
// Return the new filtered array
function filter(arr, callback) {
    let result = [];  
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]); 
        }
    }
    
    return result; // Return the new filtered array
}

let result0 = filter([1, 2, 3, 4, 15], function(val) { return val < 10; });

console.log(result0); // Output: [1, 2, 3, 4]

// Task 3
// Custom some function that mimics Array.prototype.some()
// I looped each element in the array
// If the callback returns true for any element, return true immediately
// If no elements satisfy the condition, return false
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

let result1 = some([1, 2, 3, 4], function(val) { return val > 5; });
console.log(result1); // Output: false

let result2 = some([1, 2, 3, 6], function(val) { return val > 5; });
console.log(result2); // Output: true

// Task 4
// Custom every function that mimics Array.prototype.every()
// I looped each element in the array
// If the callback returns false for any element, return false immediately
// If all elements satisfy the condition, return true
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }  
    return true;
}

let result3 = every([1, 2, 3], function(val) { return val > 0; });

console.log(result3); // Output: true

// Task 5
// Custom reduce function that mimics Array.prototype.reduce()
// Set the initial value
// Start index depends on initial value
// I looped each element in the array starting from the correct index
// Update accumulator
// Return the final reduced value
function reduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0]; 
    let startIndex = initialValue !== undefined ? 0 : 1; 

    
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr); 
    }

    return accumulator; 
}

let sum = reduce([1, 2, 3], function(acc, num) { return acc + num; });
console.log(sum); // Output: 6

// Task 6
// Custom includes function that mimics Array.prototype.includes() using a callback
// I looped each element in the array
// If the callback returns true for any element, return true immediately
// If no elements satisfy the condition, return false
function includes(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }   
    return false;
}

let result = includes([1, 2, 3], function(val) { return val === 2; });
console.log(result); // Output: true


