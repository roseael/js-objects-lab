//Exercise 6
const vehicle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels`;
    }
};

const car = Object.create(vehicle);
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2024;

console.log("Direct property 'make':", Object.hasOwn(car, 'make'));   // true
console.log("Inherited property 'wheels':", Object.hasOwn(car, 'wheels')); // false
console.log("Wheels value:", car.wheels); // 4
console.log(car.describe());

