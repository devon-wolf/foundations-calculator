// import functions and grab DOM elements
const welcomeElement = document.getElementById('welcome');
const changeButton = document.getElementById('change');

const mainBody = document.getElementById('main');

// initialize state


// set event listeners to update state and DOM

changeButton.addEventListener('click', () => {
	welcomeElement.style.color = 'lightgreen';
	welcomeElement.style.background = 'black';
	welcomeElement.textContent = '### HACKED ###';
	welcomeElement.style.padding = '5%';
	welcomeElement.style.margin = '5%';
	welcomeElement.style.border = 'solid 5px lightgreen';

	mainBody.style.background = 'black';
	mainBody.style.color = 'lightgreen';
});