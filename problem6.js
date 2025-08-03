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

