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
       let div= document.getElementById("div1");
       let div2= document.createElement("div");
       div2.innerHTML= `
       <div class="card-body">
       <img src="${this.imageURL}" alt="Employee Image">
           <h4>${this.fullName}</h4>
           <p>ID: ${this.employeeID} - Department: ${this.departmentName} - Level: ${this.levelInfo} - <p>Salary: ${this.salary}</p>
       </div> `;
       div.appendChild(div2);
    }

Employee.prototype.calculateSalaryBasedOnLevel = function (){
        const level = this.levelInfo;
        if (level === "Senior") {
            this.calculateSalary(1500, 2000);
        } else if (level === "Mid-Senior") {
            this.calculateSalary(1000, 1500);
        } else if (level === "Junior") {
            this.calculateSalary(500, 1000);
        }
    };
Employee.prototype.calculateSalary = function (min, max) {
    this.salary = Math.floor(Math.random() * (max - min + 1) + min);
    this.calculateNetSalary();
};

Employee.prototype.calculateNetSalary = function () {
    this.netSalary = this.salary - (this.salary * 0.075);
};

Employee.prototype.IDnumbers=function(){
    const usedNumbers = new Set();
    while(this.employeeID.length < 4)
    {
        const digit=Math.floor(Math.random() * 10);
        if(!usedNumbers.has(digit))
        {
            this.employeeID += digit;
            usedNumbers.add(digit)
        }
    }
}

let form = document.getElementById("form1");
form.addEventListener("submit", submitHandler);
function submitHandler(event)
 {  
    event.preventDefault();
    
    let fullName= event.target.fname.value;
    let department= event.target.departments.value;
    let level= event.target.levels.value;
    let image= event.target.img.value;
    let newEmployee = new Employee('',fullName,department, level, image);
    newEmployee.IDnumbers(); 
    newEmployee.calculateSalaryBasedOnLevel();  
    newEmployee.renderEmployee();
    /* Allemployees.push(newEmployee); */
    console.log(Allemployees);
    saveData();
    event.target.reset();
 }
 getData();

 function saveData()
 {
   if(localStorage.getItem("Employees"))
   {
     localStorage.clear();
     localStorage.setItem("Employees", JSON.stringify(Allemployees));
   }
   else {
    localStorage.setItem("Employees", JSON.stringify(Allemployees));
   }
    
 }

 function getData()
 {
    let retrivedArr = localStorage.getItem('Employees');
    let objArr = JSON.parse(retrivedArr);
    if (objArr != null) 
    {
        for (let i = 0; i < objArr.length; i++)
        {
           let newEmployee= new Employee(
            objArr[i].employeeID,
            objArr[i].fullName,
            objArr[i].departmentName,
            objArr[i].levelInfo,
            objArr[i].imageURL);

            newEmployee.IDnumbers();
            newEmployee.calculateSalaryBasedOnLevel();
            newEmployee.renderEmployee();
            /* Allemployees.push(newEmployee); */
        }
        
    }
    
 }
 
