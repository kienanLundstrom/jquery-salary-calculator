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
      newEmployeeOutput();
}

function newEmployeeOutput(){
   let el = $('#employeesOutput');
   let totalAnnualSalary = 0;
   el.empty();
   el.append(`
<tr>
   <th>First Name</th>
   <th>Last Name</th> 
   <th>ID</th>
   <th>Title</th>
   <th>Annual Salary</th>
</tr>`) 
    for( i=0; i < newEmployees.length; i++){
        el.append(`<tr>
                    <td>${newEmployees[i].firstName}</td>
                    <td>${newEmployees[i].lastName}</td> 
                    <td>${newEmployees[i].iD}</td>
                    <td>${newEmployees[i].title}</td>
                    <td>${newEmployees[i].annualSalary}</td>
                </tr>`);
        totalAnnualSalary += Number(newEmployees[i].annualSalary);
    } 
    let totalMonthlyOutput = $('#totalMonthlyOutput');
    totalMonthlyOutput.empty();
    totalMonthlyOutput.append('Total Monthly Output: ' + totalAnnualSalary/12 );
}

function readyNow(){
    $('#submitButton').on( 'click', newEmployeeInput);
}