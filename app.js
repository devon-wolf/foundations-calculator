// import functions and grab DOM elements
const welcomeElement = document.getElementById('welcome');
const changeButton = document.getElementById('change');
const userText = document.getElementById('user-input');
const mainBody = document.getElementById('main');

// initialize state

// set event listeners to update state and DOM

changeButton.addEventListener('click', () => {
    welcomeElement.style.color = 'lightgreen';
    welcomeElement.style.background = 'black';
    welcomeElement.textContent = `### ${userText.value} ###`;
    userText.value = '';
    welcomeElement.style.padding = '5%';
    welcomeElement.style.margin = '5%';
    welcomeElement.style.border = 'solid 5px lightgreen';

    mainBody.style.background = 'black';
    mainBody.style.color = 'lightgreen';
});