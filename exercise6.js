//Exercise 7
const person = {
    species: 'Human',
    breathe() { return 'Breathing...'; }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];
manager.addTeamMember = function(name) {
    this.team.push(name);
};

// Demonstrate Chain
console.log(manager.species); // From person
console.log(manager.company); // From employee
manager.addTeamMember("Alice");
console.log(manager.team);    // From manager

