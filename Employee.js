console.log("Welcome To Employee Wage Program");
var empcheck=0;
var present=1;

class EmployeeWage
{
    constructor(){}

    employeeAttendence()
    {
        empcheck=Math.floor(Math.random() *10 % 2);
        if(empcheck==present)
        {
            return "Employee is Present";
        }
        else
        {
            return "Employee is Abscent";
        }
    }
}
let display=function()
{
    let employeeWage = new EmployeeWage().employeeAttendence();
    console.log(employeeWage);
}
display();