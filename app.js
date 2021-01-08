import {
    add,
    subtract,
    multiply,
    divide,
    getRemainder
} from './mathUtils.js';

const userInput1 = document.getElementById('input1');
const userInput2 = document.getElementById('input2');
const resultBox = document.getElementById('results');
const calcButtons = document.getElementsByClassName('operator');

for (let button of calcButtons) {
    button.addEventListener('click', () => {
        const value1 = userInput1.valueAsNumber;
        const value2 = userInput2.valueAsNumber;

        switch (button.id) {
            case '+':
                resultBox.textContent = add(value1, value2);
                break;
            case '-':
                resultBox.textContent = subtract(value1, value2);
                break;
            case '*':
                resultBox.textContent = multiply(value1, value2);
                break;
            case '/':
                resultBox.textContent = divide(value1, value2);
                break;
            case '%':
                resultBox.textContent = getRemainder(value1, value2);
                break;
            default:
                resultBox.textContent = 'Something went wrong...';
        }
    });
}
