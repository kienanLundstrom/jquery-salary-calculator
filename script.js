$(document).ready(readyNow);

function newEmployeeInput(){
    console.log ('click listner')
}

function readyNow(){
    $('#submitButton').on( 'click', newEmployeeInput);
}