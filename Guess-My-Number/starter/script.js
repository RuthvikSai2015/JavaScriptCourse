'use strict';

// // //console.log("before change---",document.querySelector('.message').textContent);

// // document.querySelector('.message').textContent='Correct Number';

// // //console.log("after change---",document.querySelector('.message').textContent);

// // document.querySelector('.number').textContent=13;

// // document.querySelector('.score').textContent=40;

// document.querySelector('.guess').value = 24;
// console.log("text input value----",document.querySelector('.guess').value);


document.querySelector('.check').addEventListener(
    'click',function(){
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess);
     //   document.querySelector('.message').textContent='Correct Number !'
     if(!guess){
        document.querySelector('.message').textContent = ' No Number Entered! Please enter a Valid Number';
     }
    }
)