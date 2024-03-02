import '../style.css';

// Select all buttons and the display element
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
const displayElement = document.querySelector('.display');

// Update the display when a number button is clicked
function appendNumberToDisplay(number) {
	// If '0' is displayed, replace it with the number clicked
	// Else, add the number after
	if (displayElement.textContent === '0') {
		displayElement.textContent = number;
	} else {
		displayElement.textContent += number;
	}
}

// Append a decimal point to the display if it doesn't already contain one
function appendDecimal() {
	if (!displayElement.textContent.includes(',')) {
		displayElement.textContent += ',';
	}
}

// Attach an event handler to each number button
numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		appendNumberToDisplay(button.textContent);
	});
});

// Attach event handler to the decimal button
decimalButton.addEventListener('click', appendDecimal);