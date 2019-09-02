$(document).ready(readyNow);

let newEmployees = [];

function Employee( firstName, lastName, iD, title, annualSalary){
    this.firstName = firstName,
    this.lastName = lastName,
    this.iD = iD,
    this.title = title,
    this.annualSalary = annualSalary
}

function newEmployeeInput(){
    let newEmployeeIn = new Employee(
      $('#firsNameInput').val(),
      $('#lastNameInput').val(),
      $('#employeeIdInput').val(), 
      $('#employeeTitleInput').val(), 
      $('#annualSalaryInput').val())
    newEmployees.push( newEmployeeInput );
}
function emptyInput(){
    $('#firsNameInput').empty();
    $('#lastNameInput').empty();
    $('#employeeIdInput').empty();
    $('#employeeTitleInput').empty();
    $('#annualSalaryInput').empty();
}

function readyNow(){
    $('#submitButton').on( 'click', newEmployeeInput);

}