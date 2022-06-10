/***************************Array Methods*************** */

const friends = ['Michael','Steven','Peter'];

// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// const newLength1 = friends.unshift('John');
// console.log(friends);
// console.log(newLength1);

// /**************Remove elements from Array */

// const popped = friends.pop();
// console.log(popped);

// friends.shift();
// console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push('23');

console.log(friends);

console.log(friends.includes('23')); // === '23' === 23

if(friends.includes('Peter')){
    console.log("You have a friend named Peter");
}
