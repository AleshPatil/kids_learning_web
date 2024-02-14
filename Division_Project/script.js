let num1 = Math.round(Math.random()*100);

let num2 = Math.round(Math.random()*10);

let value1 =document.querySelector("#que").innerText = ` ${num1} Divide by ${num2} ?`;
let correctAns = num1 / num2;
correctAns = correctAns.toFixed(2);
function f1(){
    let userAns =document.querySelector('#ans').value;
    userAns =parseFloat(userAns);
    let score = document.querySelector("#score").innerText;
    score  = (parseFloat(score));
    console.log(correctAns);
    
    if(correctAns == userAns)
    {
        document.querySelector('#score').innerText = `Your Answer ${userAns} is Correct`;
    }
    else{
        document.querySelector('#score').innerText = `Your Answer ${userAns} is Wrong`;
        document.querySelector('#actualAns').innerText = `Correct Answer is ${correctAns}`;
    }
}
