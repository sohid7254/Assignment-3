/** Problem -03 ( Medicine Planner ) */
var lastDay = 56;
//write your code here
console.log("Output-(string)");
for (var serial = 1; serial <= lastDay; serial++){
    if (serial % 3 === 0){
        console.log(serial,"-medicine" );
    }else{
        console.log(serial,"-rest" );
    }
}
