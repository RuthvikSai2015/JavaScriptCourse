/*****************************Objects**************************** */

//const johnArray = ['John','Schmed',2037-1991,'trainer',['Michael','Steven','Peter']];

const john ="John";
const johnArray = { 
    
    firstName: john,
    lastName : 'Schmed',
    age : 2037-1991,
    job: 'trainer',
    friends: ['Michael','Steven','Peter']
    //firstName: 'Malini',
    //friends: ['Michael']
}
//objectName . (dot operator) property
//console.log(johnArray.friends[johnArray.friends.length-1]);

// console.log(johnArray.firstName);  // dot 
// console.log(johnArray['firstName']); // bracket 

// const nameKey = 'Name';
// console.log(johnArray['first'+nameKey]);
// console.log(johnArray['last'+nameKey]);


// const interested = prompt('What do you want to know about John ? Choose firstName , LastName , age , job');
// console.log(interested);

// console.log(johnArray[interested]); // 

// if(johnArray[interested]){
//     alert(johnArray[interested])
// }else{
//     alert("Please enter the values inside the object like firstName lastName age and friends")
// }

johnArray.location = 'india';
johnArray['faceBook'] = '@johnschmed';

//console.log(johnArray);

//Exercise 

console.log(`${johnArray.firstName} has ${johnArray.friends.length} friends , and his best friend is called ${johnArray.friends[0]}`)


