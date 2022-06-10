/**************************Error Handling*********************** */

//let a =5;
try{
      console.log("Start of try run");
      a;
      console.log("End of try run");
}catch(malini){
    console.log("Error has been occured ---",malini);
    //throw err;
}finally {
    console.log("This is always run");
}
console.log("......Then the excution continues");