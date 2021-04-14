const prompt = require('prompt-sync')({sigint: true}); 
let num  = prompt('ENTER THE EMPLOYEE WORKING STATUS CASE : ');
num=Number(num);

console.log("Welcome To Employee Wage Program");
var empcheck=0;
let attendance;
var present=1;
let salary=0;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_HRS_IN_MONTH = 100;

class EmployeeWage
{
    constructor(){}

    employeeAttendence()
    {
        empcheck=Math.floor(Math.random() *10 % 3);
        switch(num)
        {
            case 1:
            attendance="present";
            return "Employee is Present";
            break;
        
            case 2:
            attendance="part-time";
            return "Employee is Part-Time Present!!!";
            break;
       
            case 3:
            attendance="abscent";
            return "Employee is Abscent";
            break;

            default:
                console.log("Enter valid Option!! ");
                break;
        }
    }
    dailyWage(attendance)
    {
        if(empcheck==present)
        {
            salary = EMP_RATE_PER_HR * FULL_TIME_HOURS;
        }
        else if(empcheck==IS_PART_TIME)
        {
            salary = EMP_RATE_PER_HR * PART_TIME_HOURS;
        }
        else
        {
            salary = EMP_RATE_PER_HR * 0;
        }
        console.log("Daily Wage:"+salary)
        return salary;
    }
 }
let display=function()
{
    let employeeWage = new EmployeeWage().employeeAttendence();
    console.log(employeeWage);
    let employee_Wage = new EmployeeWage().dailyWage();
    console.log(employee_Wage);
}
display();