// import functions and grab DOM elements
const userInput1 = document.getElementById('input1');
const userInput2 = document.getElementById('input2');

const calcButtons = document.getElementsByClassName('operator');

const resultBox = document.getElementById('results');

// initialize state

// console.log(calcButtons); /* PASSED */
// console.log(userInput1, userInput2, calcButton, resultBox); /* PASSED */

// set event listeners to update state and DOM
for (let calcButton of calcButtons) {
    calcButton.addEventListener('click', () => {
        // console.log('Hello world'); /* PASSED */
    
        const value1 = userInput1.valueAsNumber;
        const value2 = userInput2.valueAsNumber;
        
        // console.log(value1, value2); /* PASSED */
        // console.log(value1 + value2); /* PASSED */
        
        const sum = value1 + value2;
        const diff = value1 - value2;
        const product = value1 * value2;
        const quotient = value1 / value2;
        const remainder = value1 % value2;
    
        switch (calcButton.id) {
            case '+':
                resultBox.textContent = sum;
                break;
            case '-':
                resultBox.textContent = diff;
                break;
            case '*':
                resultBox.textContent = product;
                break;
            case '/':
                resultBox.textContent = quotient;
                break;
            case '%':
                resultBox.textContent = remainder;
                break;
            default:
                resultBox.textContent = 'What did you even click?';
        }
    });
}
