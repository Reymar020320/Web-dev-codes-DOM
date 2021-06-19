// Create some arrays
const numbers = [100, 43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];


let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
// numbers[2] = 100;
// Find index of value
val = numbers.indexOf(43);

// Mutating Arrays
// Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(0, 3);
// Reverse
// numbers.reverse();

// Concatenate array

val = numbers.concat(numbers2);


// Sorting arrays
// val = fruits.sort();
// val = numbers.sort();
// Use the compare function
// val = numbers.sort(function(x, y) {
//     return x - y;
// });
// val = numbers.sort(function(x, y) {
//     return y - x;
// });

// Find

function over50(num) {
return num > 50;
}

val = numbers.find(over50);
console.log(val);