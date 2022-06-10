/***************data types**************** */

// let age=30;
//   age=31;

// const birthYear=1993;
//     //  birthYear=1994;

// console.log(age , birthYear);

// var job="programming";
var firstName ="leela";
let num=2;
function value(){
    let num=1;
    var firstName='john';
    //console.log("let num in function----",num);
}

console.log("let num outside function----",num);
console.log("var firstName---",firstName);

lastName="kumar";  //global scope
console.log(typeof lastName);

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
 (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/