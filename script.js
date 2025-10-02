let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displaymessage=function(message){
    document.querySelector('.message').textContent=message;
}

//Note:Input field from user is always in string format
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);
    //If we click the check button without entering a any input guess=null 
    if(!guess){
        displaymessage('⛔No Number');
    }else if(guess!==number){
        if(score>1){
            displaymessage(guess<number?'📉Too Low':'📈Too High');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            displaymessage('You lost the game!');
            document.querySelector('.score').textContent=0;
        }
        
    }
    //When the guess is correct
    else{
        displaymessage('🎉Correct Number');
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=number;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
});


document.querySelector('.again').addEventListener('click',function(){
    
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    displaymessage('Start guessing...');
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value=null;
    document.querySelector('.number').textContent='?';
    number=Math.trunc(Math.random()*20)+1;

});

