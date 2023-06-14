'use strict';

function getData() {
    let info = localStorage.getItem('Employees');
    let employees = JSON.parse(info);
  
    let departmentData = {};
  
    employees.forEach(employee => {
      let department = employee.departmentName;
      if (departmentData.hasOwnProperty(department)) {
        departmentData[department].count++;
        departmentData[department].totalSalary += employee.salary;
      } else {
        departmentData[department] = {
          count: 1,
          totalSalary: employee.salary
        };
      }
    });
  
    for (let department in departmentData) {
      let countCell = document.getElementById(`${department}Cell`);
      countCell.textContent = departmentData[department].count;
  
      let salaryCell = document.getElementById(`${department}Salary`);
      salaryCell.textContent = departmentData[department].totalSalary;
  
      let averageCell = document.getElementById(`${department}Average`);
      averageCell.textContent =
        departmentData[department].totalSalary / departmentData[department].count;
    }
  
    let totalEmployeesCell = document.getElementById("allCell");
    let totalSalaryCell = document.getElementById("allSalary");
    let averageSalaryCell = document.getElementById("allAverage");
  
    let totalEmployees = employees.length;
    let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    let averageSalary = totalSalary / totalEmployees;
  
    totalEmployeesCell.textContent = totalEmployees;
    totalSalaryCell.textContent = totalSalary;
    averageSalaryCell.textContent = averageSalary;
  }
getData();
