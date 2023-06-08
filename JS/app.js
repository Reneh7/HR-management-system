'use strict';

const Allemployees = [];

function Employee(id, name, department, level, img) {
    this.employeeID = id;
    this.fullName = name;
    this.departmentName = department;
    this.levelInfo = level;
    this.imageURL = img;
    this.salary = 0;
    Allemployees.push(this);
}

Employee.prototype.renderEmployee = function () {
    document.write(`<p>The employee name is ${this.fullName} and their salary is ${this.salary}</p>`);
};

Employee.prototype.calculateSalary = function (min, max) {
    this.salary = Math.floor(Math.random() * (max - min + 1) + min);
    this.calculateNetSalary();
};

Employee.prototype.calculateNetSalary = function () {
    this.netSalary = this.salary - (this.salary * 0.075);
};

let firstEmployee = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./Assets/profile.jpg");
let secondEmployee = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let thirdEmployee = new Employee(1005, "Rana Saleh", "Development", "Junior");

for (let i = 0; i < Allemployees.length; i++) {
    const employee = Allemployees[i];
    const level = employee.levelInfo;

    if (level === "Senior") {
        employee.calculateSalary(1500, 2000);
    } else if (level === "Mid-Senior") {
        employee.calculateSalary(1000, 1500);
    } else if (level === "Junior") {
        employee.calculateSalary(500, 1000);
    }

    employee.renderEmployee();
}

console.log(firstEmployee);
console.log(secondEmployee);
console.log(thirdEmployee);
console.log(Allemployees);
