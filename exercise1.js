// Exercise 1: Function Declarations
function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(5, 10)); // Expected: 50
console.log(calculateArea(7, 3));  // Expected: 21
console.log(calculateArea(4, 4));  // Expected: 16

// Exercise 2: Function Expressions
const calculatePerimeter = function(length, width) {
    return (2 * length) + (2 * width);
};

console.log("--- Perimeter Tests ---");
console.log(calculatePerimeter(5, 10)); // Expected: 30
console.log(calculatePerimeter(7, 3));  // Expected: 20
console.log(calculatePerimeter(4, 4));  // Expected: 16
