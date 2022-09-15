let firstNum, secundNum, totalScore1, totalScore2;
firstNum = 0;
secundNum = 0;
totalScore1 = 0;
totalScore2 = 0;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2"); 

function roll(){
    const firstNum = Math.floor(Math.random() * 6) + 1;
    const firstDice = 'dice/dice' + firstNum + ".png";
    document.querySelectorAll('img')[0].setAttribute('src',firstDice);
    totalScore1 +=firstNum;
    document.querySelectorAll("p")[4].innerHTML = totalScore1;

    const secundNum = Math.floor(Math.random() * 6) + 1;
    const secundDice = 'dice/dice' + secundNum + ".png";
    document.querySelectorAll('img')[1].setAttribute('src',secundDice);
    totalScore2 +=secundNum;
    document.querySelectorAll("p")[9].innerHTML = totalScore2;

    if (totalScore1 > 19){
        document.querySelector('h1').innerHTML = "Player 1 Win"
    }
    else if (totalScore2 > 19){
        document.querySelector('h1').innerHTML = "Player 2 Win"
    }
    else if (totalScore1 == 1){
        document.querySelector('h1').innerHTML = "You Loose"
        
    }
    else if (totalScore2 == 1){
        document.querySelector('h1').innerHTML = "You Loose"
        
    }
}

function reload(){
    location.reload(); 
   
};
btn1.addEventListener('click', ()=>{
    roll();
})
btn2.addEventListener('click', ()=>{
    reload();
})
// //Generate Random Number via function
// function roll(){

// //Displaying Total Score
// 	document.querySelector("#totalScore1").innerHTML = totalScore1;
// 	document.querySelector("#totalScore2").innerHTML = totalScore2;