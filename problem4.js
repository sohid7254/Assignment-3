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