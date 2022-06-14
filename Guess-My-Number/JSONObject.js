// const objectName = {

//     "employees": [
//         {"firstName":"John"},
//         {"lastName":"Doe"}

//     ],
//     "profession":"teacher"
// }
// //console.log(objectName);

let text = '{"employees" : [' +
    '{"firstName":"John","lastName":"Doe"},'+'{"firstName":"Peter"},{"lastName":"Smith"}]}';

let textParse = JSON.parse(text);

console.log(textParse.employees[0].firstName);
console.log(textParse.employees[1].lastName);

/*************************Login*************** */

// const loginObject = {
//     "username":"malini",
//     "password":"123456"
// }

// const response ={
//     "statusCode":"400",
//     "message":"Logged in Successfully"
// }

// const response ={
//     "statusCode":"500",
//     "message":"Credentials not valid"
// }
