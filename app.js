let firstNum,totalScore;

firstNum = 0;
totalScore = 0;
// generate from 1 to 6
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1"); 

function roll1() {
    const firstNum = Math.floor(Math.random() * 6) + 1;
    const fistDise = 'dice/dice' + firstNum + '.png';
    document.querySelectorAll('img')[0].setAttribute('src',fistDise);
    document.querySelectorAll("p")[1].innerHTML = firstNum;
    

    //Adding Current Score to Total Score
	totalScore += firstNum;
    //Displaying Total Score
	document.querySelectorAll("p")[3].innerHTML = totalScore;
    if (totalScore > 19){
        document.querySelector('h1').innerHTML = "You Win"
    
    }
     else if (firstNum == 1){
        document.querySelector('h1').innerHTML = "You Loose"
        
    };
    
};

function reload(){
    location.reload(); 
   
};

btn.addEventListener('click', ()=>{
    roll1();
})
btn1.addEventListener('click', ()=>{
    reload();
})

