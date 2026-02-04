const numbers = [1, 2, 3, 4, 5];

// Square numbers using map
const squared = numbers.map(num => num * num);

// Get even numbers using filter
const evens = numbers.filter(num => num % 2 === 0);

// Sum numbers using reduce
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Squared:", squared);      // [1, 4, 9, 16, 25]
console.log("Even numbers:", evens);   // [2, 4]
console.log("Sum:", sum);              // 15
