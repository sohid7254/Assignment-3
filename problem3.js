/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for ( serial = 1; serial <= lastDay; serial++){
    if (serial % 3 === 0){
        console.log(serial,"-medicine" );
    }else{
        console.log(serial,"-rest" );
    }
}
