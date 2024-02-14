let num1 = Math.round(Math.random()*100);

let num2 = Math.round(Math.random()*100);

let value1 =document.querySelector("#que").innerText = `What is Substraction of ${num1} & ${num2} ?`;
let correctAns = num1 - num2;
function f1(){
    let userAns =document.querySelector('#ans').value;
    userAns =parseInt(userAns);
    let score = document.querySelector("#score").innerText;
    score  = (parseInt(score));
    console.log(correctAns);
    
    if(correctAns === userAns)
    {
        document.querySelector('#score').innerText = `Your Answer ${userAns} is Correct`;
    }
    else{
        document.querySelector('#score').innerText = `Your Answer ${userAns} is Wrong`;
        document.querySelector('#actualAns').innerText = `Correct Answer is ${correctAns}`;
    }
}
