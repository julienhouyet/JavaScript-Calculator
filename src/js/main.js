import { Calculator } from './calculator.js';

// Initialize the calculator when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	// Select all buttons and the display element
	const displayElement = document.querySelector('.display');
	const numberButtons = document.querySelectorAll('.number');
	const decimalButton = document.querySelector('.decimal');
	const clearButton = document.querySelector('.clear');
	const calculator = new Calculator(displayElement);

	// Attach an event handler to each number button
	numberButtons.forEach(button => {
		button.addEventListener('click', () => {
			calculator.appendNumber(button.textContent);
		});
	});

	// Attach event handler to the decimal button
	decimalButton.addEventListener('click', () => {
		calculator.appendDecimal();
	});

	// Attach event handler to the AC button
	clearButton.addEventListener('click', button => {
		calculator.clear();
	});
});