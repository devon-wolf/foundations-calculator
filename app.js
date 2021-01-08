import { clickHandler } from './handlers.js';

const calcButtons = document.getElementsByClassName('operator');

for (let button of calcButtons) {
    button.addEventListener('click', () => clickHandler(button));
}