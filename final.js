/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var result = area / 2;
console.log(result);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000){
    console.log("Laptop");
}else if(money >=10000){
    console.log("Cycle");
}else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var serial = 1; serial <= lastDay; serial++){
    if (serial % 3 === 0){
        console.log(serial,"-medicine" );
    }else{
        console.log(serial,"-rest" );
    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "data.docx";
//write your code here

if(fileName.slice(0, 1) === "#"){
    console.log("Store");
}else if(fileName.slice(-4) === ".pdf"){
    console.log("Store");
}else if(fileName.slice(-5) === ".docx"){
    console.log("Store");
}else{
    console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student = { 
    name: "jhanker", 
    roll: 1014, 
    department: "cse" 
};
//write your code here
var first = student.name;
var second = student.roll;
var third = student.department;

var result = first+second+('.')+third+('@ph.ac.bd');
console.log(result);

/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

var payAmount = startingSalary;
 
for ( var i = 0; i < experience; i++){
    payAmount *=1.05;  //salary increements 5% each year
}
var payAmount = payAmount.toFixed(2);
console.log(payAmount)
