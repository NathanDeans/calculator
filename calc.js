let currentNum = "";
let previousNum = "";
let operator = "";


const currentDisplayNumber = document.querySelector(".lowNum");
const previousDisplayNumber = document.querySelector(".topNum");

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (currentNum!= "" && previousNum != "") {
        calculate();
    }
})



const clear = document.querySelector(".clear");
clear.addEventListener("click",clearCalc);

const numberButtons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");

 numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent)
    });
 });

 function handleNumber(number) {
    if(currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum; 
    }
 }

 operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent)
    })
 })

 function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + " " + operator
    currentNum = "";
    currentDisplayNumber.textContent = "";
 }

 function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

     if(operator === "+"){
        addition(previousNum,currentNum)
    
     } else if( operator === "-"){
        subtraction(previousNum,currentNum)

     } else if(operator === "x") {
        multiply(previousNum,currentNum)
     } else if(operator=== "÷") {
        divide(previousNum,currentNum)
     }
     previousDisplayNumber.textContent = "";
     currentDisplayNumber.textContent = previousNum;
 }

function addition(x,y) {
    previousNum = x + y;
    currentDisplayNumber.textContent = previousNum;
}

function subtraction(x,y) {
    previousNum = x - y;
    currentDisplayNumber.textContent = previousNum;
}

function multiply(x,y){
    previousNum = x * y;
    currentDisplayNumber.textContent = previousNum;
}

function divide(x,y) {
    previousNum = x / y;
    currentDisplayNumber.textContent = previousNum;
}

    function clearCalc() {
        currentNum = "";
        previousNum = "";
        operator = "";
        currentDisplayNumber.textContent = "0";
        previousDisplayNumber.textContent = "";
      }
 



