'use strict';

// // //console.log("before change---",document.querySelector('.message').textContent);

// // document.querySelector('.message').textContent='Correct Number';

// // //console.log("after change---",document.querySelector('.message').textContent);

// // document.querySelector('.number').textContent=13;

// // document.querySelector('.score').textContent=40;

// document.querySelector('.guess').value = 24;
// console.log("text input value----",document.querySelector('.guess').value);

let score = 20;
const secretNumber = Math.trunc(Math.random()*20)+1;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener(
    'click',function(){
        const guess = Number(document.querySelector('.guess').value);
        //console.log(typeof guess);
     //   document.querySelector('.message').textContent='Correct Number !'
     if(!guess){
        document.querySelector('.message').textContent = ' No Number Entered! Please enter a Valid Number';
     }else if(guess === secretNumber)
     {
        document.querySelector('.message').textContent='Correct Number';
        document.querySelector('body').style.backgroundColor='#60b347';
     }else if(guess > secretNumber){
        if(score>0){
            document.querySelector('.message').textContent='Too High!';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You have lost the game please try again!!';
        }
        
     }else if(guess < secretNumber){
        if(score>0){
        document.querySelector('.message').textContent='Too Low!';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You have lost the game please try again!!';
        }
     }
    }
)