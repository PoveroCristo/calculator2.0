//Global Values;
let firstValue = "";
let secondValue = "";
let computedValue = "";


let resultDisplay = document.getElementById("result-display");
let currentOperation = document.getElementById("current-operation");
//Result display
let result = document.createElement("div");
result.classList.add("result");
let resultText = document.createTextNode("0");
result.appendChild(resultText);
resultDisplay.appendChild(result);

//Current operation display
let current = document.createElement("div");
current.classList.add("current");
let currentText = document.createTextNode(`Calculating: ${firstValue} ${secondValue}`);
current.appendChild(currentText);
currentOperation.appendChild(current);


console.log(result.textContent);
console.log(current.textContent);

//Calculator Keys function
let calculatorKeys = document.querySelector("#calculator-keys")
calculatorKeys.addEventListener("click", e => {
    let calculatorButton = e.target;
    let buttonValue = calculatorButton.dataset.value;
    

    if (e.target.matches("button")) {
        if (buttonValue === "+" ||
            buttonValue === "-" ||
            buttonValue === "x" ||
            buttonValue === ":") {
            console.log("Operator button");
            if(buttonValue === "+") {
                if(firstValue === "") {
                    firstValue = result.textContent;
                    result.textContent = "0";
                    current.textContent += "" + firstValue + " + ";
                }
            }
            if(buttonValue === "-") {
                if(firstValue === "") {
                    firstValue = result.textContent;
                    result.textContent = "0";
                    current.textContent += "" + firstValue + " - ";
                }
            }
            if(buttonValue === "x") {
                if(firstValue === "") {
                    firstValue = result.textContent;
                    result.textContent = "0";
                    current.textContent += "" + firstValue + " * ";
                }
            }
            if (buttonValue === ":") {
                if (firstValue === "") {
                    firstValue = result.textContent;
                    result.textContent = "0";
                    current.textContent += "" + firstValue + " / ";
                }
            }
        }
        if (buttonValue === "number") {
            console.log("Number button");
            if (result.textContent.length <= 20) {
                if (current.textContent.indexOf("=") >= 0) {
                    current.textContent = "Calculating:"
                    firstValue = "";
                    secondValue = "";
                    if (result.textContent === "0") {
                        result.textContent = calculatorButton.textContent;
                    } else {
                        result.textContent += calculatorButton.textContent;
                    }
                } else {
                    if (result.textContent === "0") {
                        result.textContent = calculatorButton.textContent;
                    } else {
                        result.textContent += calculatorButton.textContent;
                    }

                }
            }
        }
        if (buttonValue === "backspace") {
            console.log("Backspace button");
            let backspaceResult = result.textContent.substr(0, result.textContent.length - 1);
            result.textContent = backspaceResult;
            if(result.textContent.length === 0) {
                result.textContent = "0";
            }
        }
        if (buttonValue === "=") {
            console.log("Equal button");
            if(firstValue != "" && current.textContent.indexOf("+") >= 0) {
                secondValue = result.textContent;
                result.textContent = "0";
                computedValue = parseFloat(firstValue) + parseFloat(secondValue);
                current.textContent += secondValue + " = " + computedValue;
            }
            if(firstValue != "" && current.textContent.indexOf("-") >= 0) {
                secondValue = result.textContent;
                result.textContent = "0";
                computedValue = parseFloat(firstValue) - parseFloat(secondValue);
                current.textContent += secondValue + " = " + computedValue;
            }
            if(firstValue != "" && current.textContent.indexOf("*") >= 0) {
                secondValue = result.textContent;
                result.textContent = "0";
                computedValue = parseFloat(firstValue) * parseFloat(secondValue);
                current.textContent += secondValue + " = " + computedValue;
            }
            if(firstValue != "" && current.textContent.indexOf("/") >= 0) {
                secondValue = result.textContent;
                result.textContent = "0";
                computedValue = parseFloat(firstValue) / parseFloat(secondValue);
                current.textContent += secondValue + " = " + computedValue;
            }
            
            
        }
        if (buttonValue === "decimal"){
            console.log("Decimal button");
            if(result.textContent.length <= 20) {
            if(result.textContent.indexOf(".") === -1) {
            result.textContent += calculatorButton.textContent;
            }
        }
        }
        if (buttonValue === "clear") {
            console.log("Clear button");
            result.textContent = "0";
            current.textContent = "Calculating:"
            firstValue = "";
            secondValue = "";
        }

    }
})