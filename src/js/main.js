import { updateDisplay, appendNumberToDisplay, appendDecimal, resetDisplay } from './ui.js';

// Initialize the calculator when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	// Select all buttons and the display element
	const displayElement = document.querySelector('.display');
	const numberButtons = document.querySelectorAll('.number');
	const decimalButton = document.querySelector('.decimal');
	const clearButton = document.querySelector('.clear');

	// Attach an event handler to each number button
	numberButtons.forEach(button => {
		button.addEventListener('click', () => {
			appendNumberToDisplay(button.textContent, displayElement);
		});
	});

	// Attach event handler to the decimal button
	decimalButton.addEventListener('click', () => {
		appendDecimal(displayElement);
	});

	// Attach event handler to the AC button
	clearButton.addEventListener('click', () => {
		resetDisplay(displayElement);
	});
});