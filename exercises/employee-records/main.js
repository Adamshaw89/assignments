/*
You are to create a collection of employee's information for your company. Each employee has the following attributes:

1. Name
2. Job title
3. Salary
4. Status

First, you will create an empty array named `employees`

Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

(e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

You will then:

1. Instantiate three employees
2. Override the status attribute of one of them to either "Part Time" or "Contract"
3. Call the `printEmployeeForm` method for each employee
4. Put the generated employees into the `employees` array using whichever method you prefer.

*/

let employees = [];

function Employee (name, title, salary){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function (){
    console.log("Name: "+ this.name + ", " + "Job Title: " + this.title + ", " + "Salary: " + this.salary +  ", " + "Status: " + this.status )
}

Employee.prototype.addToArr = function (){
    employees.push(this)
}

let aragorn = new Employee("Aragorn", "Leader", "Gondor");

let gandalf = new Employee("Gandalf", "Wizard", "Purpose");

let sam = new Employee ("Samwise", "Hero", "Peace");


gandalf.status = "Contract";

aragorn.printEmployeeForm();
gandalf.printEmployeeForm();
sam.printEmployeeForm();

aragorn.addToArr();
gandalf.addToArr();
sam.addToArr();

console.log(employees);

