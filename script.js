function add(a,b) {

    return Number(a)+Number(b);
}

function substract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let a=null;
let b=null;
let operator = "";
let dot=false;
resetDisplay(0);

function operate(a,operator,b) {
    if(operator == "+") {
        return add(a,b);
    } else if(operator == "-") {
        return substract(a,b);
    } else if(operator == "×") {
        return multiply(a,b);
    } else if(operator == "÷") {
        return divide(a,b);
    }
}

let displayNum = 0;
function resetDisplay(displayNum) {
    const screen = document.getElementById("display-number");
    screen.textContent = displayNum;
    console.log("a = ", a);
    console.log("operator = ", operator);
    console.log("b = ", b);
}

const numButtons = document.querySelectorAll(`[data-number]`);
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // displayNum = displayNum*10 + Number(button.innerHTML);
        if(displayNum == 0) {
            displayNum = button.innerHTML;
        } else {
            displayNum = displayNum + button.innerHTML;
        }
        resetDisplay(displayNum);
    })
})

const operatorButtons = document.querySelectorAll(`[data-operator]`);
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(!operator) {
            // two number single operation
            a = displayNum;
            operator = button.innerHTML;            
            displayNum = 0;
        } else {
            //multiple number
            
            //just like equal button
            b = displayNum;
            displayNum = operate(a,operator,b);
            resetDisplay(displayNum);
            a = displayNum;
            displayNum = 0;
            b = null;
            operator = button.innerHTML;

        }
    })
})

const equalButton = document.querySelector('#button-equal');
equalButton.addEventListener("click", (e) => {
    if(!operator) {
        return;
    }
    if(operator){
        b = displayNum;
        displayNum = operate(a,operator,b);
        resetDisplay(displayNum);
    }

    //reset calculator
    a=null;
    operator="";
    b=null;
})

const clearButton = document.querySelector('#button-clear');
clearButton.addEventListener("click", () => {
    a=null;
    operator="";
    b=null;
    displayNum=0;
    resetDisplay(displayNum);
})

const deleteButton = document.querySelector('#button-delete');
deleteButton.addEventListener("click", () => {
    displayNum=Math.floor(displayNum/10);
    resetDisplay(displayNum);
})

const dotButton = document.querySelector('#button-dot');
dotButton.addEventListener("click", () => {
    if(dot){
        return;
    } else {
        displayNum = displayNum + ".";
        resetDisplay(displayNum);
        dot = true;
    }
})