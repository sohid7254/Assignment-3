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
var lastDay = 15;
//write your code here
console.log("Output-(string)");
for (var serial = 1; serial <= lastDay; serial++){
    if (serial % 3 === 0){
        console.log("-medicine",serial );
    }else{
        console.log("-rest", serial);
    }
}