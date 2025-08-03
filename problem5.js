/** Problem 05 - ( PH Email Generator )  */
var student = { 
    name: "Jhanker", 
    roll: 1014, 
    department: "cse" 
};
//write your code here
var first = student.name;
var second = student.roll;
var third = student.department;

var result = first+second+('.')+third+('@ph.ac.bd');
console.log(result);

