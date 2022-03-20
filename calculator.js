// digits
let dig0 = document.querySelector("#digit0");
let dig1 = document.querySelector("#digit1");
let dig2 = document.querySelector("#digit2");
let dig3 = document.querySelector("#digit3");
let dig4 = document.querySelector("#digit4");
let dig5 = document.querySelector("#digit5");
let dig6 = document.querySelector("#digit6");
let dig7 = document.querySelector("#digit7");
let dig8 = document.querySelector("#digit8");
let dig9 = document.querySelector("#digit9");

// operations
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let percent = document.querySelector("#percent");
let period = document.querySelector("#period");
let reverse = document.querySelector("#reverse");
let equal = document.querySelector("#equal");

//utilities
let del = document.querySelector("#del");
let clear = document.querySelector("#clear");
let sentenceDis = document.querySelector(".sentence");
let result = document.querySelector(".result");
let history = document.querySelector(".history");

// init
let firstNumber = 0;
let secondNumber = 0;

let startSecondNumber = false;
let operation = "";

let sentence = "";

// digits events
dig0.addEventListener("click", function(){buildNumber(0);})
dig1.addEventListener("click", function(){buildNumber(1);})
dig2.addEventListener("click", function(){buildNumber(2);})
dig3.addEventListener("click", function(){buildNumber(3);})
dig4.addEventListener("click", function(){buildNumber(4);})
dig5.addEventListener("click", function(){buildNumber(5);})
dig6.addEventListener("click", function(){buildNumber(6);})
dig7.addEventListener("click", function(){buildNumber(7);})
dig8.addEventListener("click", function(){buildNumber(8);})
dig9.addEventListener("click", function(){buildNumber(9);})

// numbers construction
function buildNumber (numberRec){
    sentenceBig ()
    if(startSecondNumber === false){
        firstNumber = firstNumber * 10 + numberRec;
        sentenceDis.innerHTML = firstNumber;
        sentence = firstNumber;
    } else {
        secondNumber = secondNumber * 10 + numberRec;
        sentenceDis.innerHTML = sentence + " " + secondNumber;
    }
}

// sentence in focus
function sentenceBig (){
    result.style = "font-size: 20px; opacity: 50%";
    sentenceDis.style = "font-size: 30px; opacity: 100%";
}

// result in focus
function resultBig (){
    result.style = "font-size: 25px; opacity: 100%";
    sentenceDis.style = "font-size: 20px; opacity: 50%";
}

// operations call
add.addEventListener("click", function(){
    //math area
    startSecondNumber = true;
    operation = "add";

    //display area
    symbol = "+";
    sentenceDis.innerHTML = firstNumber + " " + symbol;
    sentence = sentence + " " + symbol;
    sentenceBig ()
})

subtract.addEventListener("click", function(){
    //math area
    startSecondNumber = true;
    operation = "subtract";

    //display area
    symbol = "-";
    sentenceDis.innerHTML = firstNumber + " " + symbol;
    sentence = sentence + " " + symbol;
    sentenceBig ()
})

multiply.addEventListener("click", function(){
    //math area
    startSecondNumber = true;
    operation = "multiply";

    //display area
    symbol = "*";
    sentenceDis.innerHTML = firstNumber + " " + symbol;
    sentence = sentence + " " + symbol;
    sentenceBig ()
})

divide.addEventListener("click", function(){
    //math area
    startSecondNumber = true;
    operation = "divide";

    //display area
    symbol = "/";
    sentenceDis.innerHTML = firstNumber + " " + symbol;
    sentence = sentence + " " + symbol;
    sentenceBig ()
})

clear.addEventListener("click", function(){
    firstNumber = 0;
    secondNumber = 0;
    startSecondNumber = false;
    sentenceDis.innerHTML = "One operation at a time";
    result.innerHTML = "Press = after every operation";
})


equal.addEventListener("click", function(){
    let finalResult = 0;
    switch (operation) {
        case "add" :
            finalResult = firstNumber + secondNumber;
            result.innerHTML = "= " + finalResult;
            historyFn(sentence, finalResult)
            break;
        case "subtract" :
            finalResult = firstNumber - secondNumber;
            result.innerHTML = "= " + finalResult;
            historyFn(sentence, finalResult)
            break;
        case "multiply" :
            finalResult = firstNumber * secondNumber;
            result.innerHTML = "= " + finalResult;
            historyFn(sentence, finalResult)
            break;
        case "divide" :
            finalResult = firstNumber / secondNumber;
            result.innerHTML = "= " + finalResult;
            historyFn(sentence, finalResult)
            break;
        default :
            alert("Duuuuude, ceva ai facut gresit pe undeva :))")
    }
    firstNumber = "";
    secondNumber = "";
    startSecondNumber = false;
    operation = "";
    resultBig ()
})

function historyFn(x, y) {
    const newP = document.createElement("p");
    const newContent = document.createTextNode(x + " " + secondNumber +  " = " + y);
    newP.appendChild(newContent);
    history.appendChild(newP);
}

