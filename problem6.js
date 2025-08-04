/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here


 var payAmount = startingSalary;
for (i = 0; i < experience; i++){
    payAmount += payAmount * 0.05;  //salary increements 5% each year
}
console.log(payAmount.toFixed(2));



