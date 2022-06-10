// /********************************Functions******************** */

// function logger(){
//     console.log(" in logger");
//     console.log(" in logger1");
//     console.log(" in logger2");
// }

// //calling / invoking/ running function
// //Code Reusability 

// // logger();
// // logger();
// // logger();

// /************* Parameterised Function *******************/

// //fruit processor 

// function fruitProcessor1(apples,oranges){

//     //console.log(apples,oranges);
//     const juice = `Juice prepared ${apples} apples and ${oranges} oranges `;
//     return juice;
// }
// function fruitProcessor(guava,lime,lemon){

//     //console.log(apples,oranges);
//     const juice = `Juice prepared ${guava} ----- ${lime} ---------${lemon}`;
//     return juice;
// }
// const firstFunction = fruitProcessor1('firstFunc1','firstFunc2');
// const secondFunction = fruitProcessor('secondFunc1','secondFunc2','secondFunc3');
// console.log("First Function with parameter2-----",firstFunction);
// console.log("secondFunction with parameter1 ----",secondFunction);
// //sappleOrangeJuice = "juice Value";

/********************Function Expressions***************** */

// const calcAge1 = function (birthYear){ //Anonymous functions
//     const age = 2037 - birthYear;
//     return age;
// }

// //const firstFunction = fruitProcessor1('firstFunc1','firstFunc2');
// const age2 = calcAge1(1991);
// console.log("age2--------",age2);

/**************Arrow Functions********** */

//  const calcAge1 = function (birthYear){ 
//      const age = 2037 - birthYear;
//      return age;
//  }

 //const calcAge2 = birthYear => 2037 - birthYear;

//  console.log("Arrow function -------",calcAge2(1991));
//  const age2 = calcAge2(1991);
//  console.log("age2-------",age2);

//  const yearsUntilRetirement = birthYear => {
//      const age = 2037 - birthYear;
//      const retirement = 65 - age;
//      return retirement;
//  }
//  console.log(yearsUntilRetirement(1991));

// const yearsUntilRetirement = (firstName,birthYear) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     if(isNaN(retirement)){
//         return "please provide correct input parameters";
//     }else
//     {
//        return `${firstName} retires in ${retirement} years`;
//     }
// }
// console.log(yearsUntilRetirement('John','george'));

////////////////////////////////////////////////////

// function example(){ // function declaration

// }
//  const example = function(){ //function expressions

//  }

//  const example = value => {} //Arrow function 

function cutFruitPieces(fruit){
    return fruit*4;
}

// function fruitProcessor(apples,oranges){

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = ` Juice with ${applePieces} piece of apple  and ${orangePieces} piece of orange`;
//     return juice ;
// }

// console.log(fruitProcessor(2,3));

const fruitProcessor1 = (apples,oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = ` Juice with ${applePieces} piece of apple  and ${orangePieces} piece of orange`;
    return juice ;
}

console.log(fruitProcessor1(2,3));