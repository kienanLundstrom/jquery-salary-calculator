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
      $('#firstNameInput').val(),
      $('#lastNameInput').val(),
      $('#employeeIdInput').val(), 
      $('#employeeTitleInput').val(), 
      $('#annualSalaryInput').val())
    newEmployees.push( newEmployeeIn );
      $('#firstNameInput').val('');
      $('#lastNameInput').val('');
      $('#employeeIdInput').val('');
      $('#employeeTitleInput').val('');
      $('#annualSalaryInput').val('');
}


function readyNow(){
    $('#submitButton').on( 'click', newEmployeeInput);
}