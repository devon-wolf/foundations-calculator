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

export function clickHandler(button) {
    const value1 = userInput1.valueAsNumber;
    const value2 = userInput2.valueAsNumber;

    switch (button.id) {
        case '+':
            resultBox.textContent = add(value1, value2);
            // console.log('add');
            break;
        case '-':
            resultBox.textContent = subtract(value1, value2);
            // console.log('subtract');
            break;
        case '*':
            resultBox.textContent = multiply(value1, value2);
            // console.log('multiply');
            break;
        case '/':
            resultBox.textContent = divide(value1, value2);
            // console.log('divide');
            break;
        case '%':
            resultBox.textContent = getRemainder(value1, value2);
            // console.log('getRemainder');
            break;
        default:
            resultBox.textContent = 'Something went wrong...';
            // console.log('default');
    }

    // console.log('got to the bottom of the handler');
}