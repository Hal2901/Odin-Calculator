function add(n1, n2) {
    return (n1 + n2).toFixed(3);
}

function subtract(n1, n2) {
    return (n1 - n2).toFixed(3);
}

function multiply(n1, n2) {
    return (n1 * n2).toFixed(3);
}

function divide(n1, n2) {
    if (n2 === 0) return "ERROR: can't divide 0 bro";
    else return (n1 / n2).toFixed(3);
}

function operate(n1, operator, n2) {
    switch(operator) {
        case "plus":
            return add(n1, n2);
        case "minus":
            return subtract(n1, n2);
        case "time":
            return multiply(n1, n2);
        case "divide":
            return divide(n1, n2);
    }
}

const display = document.querySelector(".display");
const btn = document.querySelectorAll(".numbers button");
const btnSign = document.querySelectorAll(".signs button");
const btnEqual = document.querySelector("#equal");
const btnClear = document.querySelector("#clear");
const btnDelete = document.querySelector("#delete");

let n1;
let n2;
let operator;
let i, j;
let sequence;
let arrDisplay = [];

btn.forEach(button => button.addEventListener("click", (e) => {

    if (arrDisplay.includes(".")) {
        j = true;
    }
    else {
        j = false;
    }
    
    if (j) {
        if (e.target.innerText === ".") return;
    };

    arrDisplay.push(e.target.innerText);
    display.textContent = arrDisplay.join("");
    sequence = arrDisplay.join("");
    i = true;

}) );

btnSign.forEach(button => button.addEventListener("click", (e) => {
    
    if (operator && i) {
        n2 = +sequence;
        display.textContent = operate(n1, operator, n2);
        sequence = display.textContent;
    }

    n1 = +sequence;
    operator = e.target.id;
    arrDisplay = [];
    i = false;

}) );

btnEqual.addEventListener("click", () => {

    n2 = +sequence;

    if (operator && i) {
        display.textContent = operate(n1, operator, n2);
        sequence = display.textContent;
    }

    arrDisplay = [];
    operator = false;
    i = false;

});

btnClear.addEventListener("click", () => {

    display.textContent = "";
    sequence = "";
    n1 = 0;
    n2 = 0;
    operator = "";
    arrDisplay = [];

});

btnDelete.addEventListener("click", () => {
    
    arrDisplay.pop();
    display.textContent = arrDisplay.join("");
    sequence = arrDisplay.join("");

    console.log(display.textContent);
    if (display.textContent === "") {
        display.textContent = n1;
        return;
    }

});
