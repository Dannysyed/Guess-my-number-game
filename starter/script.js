//TODO:start
let sc=document.querySelector('.score')
sc.textContent=20
let inp=document.querySelector('.check');
let gus=document.querySelector('.guess');
let num=document.querySelector('.number');
let che=document.querySelector('.message');
let bac=document.querySelector('body').style
let aga=document.querySelector('.again')
let high=document.querySelector('.highscore')
//TODO:define

let number=Math.trunc(Math.random()*20+1)
num.textContent=number
num.textContent='?'
let score=20
let highscore=20

//TODO:execute
inp.addEventListener('click',function()
{
  if(gus.value==number)
  {
      console.log('correct');
     bac.backgroundColor='green'
      che.textContent='correct'
      num.textContent=number
    

  }
  else if(gus.value>number)
  {
    che.textContent='high'
    score=score-1
    sc.textContent=score
    // highscore=score
    if(score<0)
    {
      sc.textContent=0
      bac.backgroundColor='red'

    }
  }
  else if(gus.value<number)
  {
    che.textContent='low'
    score=score-1
    sc.textContent=score
    // highscore=score 
    
    if(score<0)
    {
      sc.textContent=0
      che.textContent='game over'
      bac.backgroundColor='red'
    }
  }



})
aga.addEventListener('click',function()
{
  highscore=score
  console.log(score);
  console.log(highscore);
  
  
  if(hig)
  {
    
  high.textContent=score
  }

  score=20
 
  number=Math.trunc(Math.random()*20+1)
  che.textContent='start guessing'
  sc.textContent=score
  num.textContent='?'
  bac.backgroundColor='black'

})
////
'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayscore = function (score) {
  document.querySelector('.score').textContent = score;
};
let score = 20;
let highscore = 0;
let el = document.querySelector('.check');
let bl = document.querySelector('.message');
let cl = document.querySelector('.number');
let dl = document.querySelector('.score');
let hs = document.querySelector('.highscore');
// cl.textContent = number;
el.addEventListener('click', function () {
  let al = Number(document.querySelector('.guess').value);
  console.log(al, typeof al);
  if (!al) {
    displaymessage('enter some no.😎');
  } else if (al == number) {
    displaymessage('correct');
    document.querySelector('body')
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    cl.textContent = number;
  } else if (al > number) {
    if (score > 1) {
      displaymessage('lill higer');
      score--;
      // document.querySelector('.score').textContent = score;
      displayscore(score);
    } else {
      displaymessage('loser');
      // document.querySelector('.score').textContent = 0;
      displayscore(0);
    }
  } else if (al < number) {
    if (score > 1) {
      displaymessage('lill low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayscore(score);
    } else {
      displaymessage('loser');
      // document.querySelector('.score').textContent = 0;
      displayscore(0);
    }
  }
});
let dls = document.querySelector('.again');
dls.addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  // document.querySelector('.score').textContent = 20;
  displayscore(20);
  bl.textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  // if (score < hs.textContent) {
  //   hs.textContent = score;
  // }
});

