import { Calculator } from './calculator.js';

/** Initialize the calculator when the DOM is fully loaded */
document.addEventListener('DOMContentLoaded', () => {

	// Select all buttons and the display element
	const displayElement = document.querySelector('.display');
	const numberButtons = document.querySelectorAll('.number');
	const decimalButton = document.querySelector('.decimal');
	const clearButton = document.querySelector('.clear');
	const equalsButton = document.querySelector('.equals');
	const percentButton = document.querySelector('.percent');
	const toggleSignButton = document.querySelector('.toggle-sign');
	const operationButtons = document.querySelectorAll('.operation');

	/** Creates a new instance of the Calculator class */
	const calculator = new Calculator(displayElement, operationButtons);

	/** Attaches an event handler to each number button */
	numberButtons.forEach(button => {
		button.addEventListener('click', () => {
			calculator.appendNumber(button.textContent);
		});
	});

	/** Attaches event handler to the decimal button */
	decimalButton.addEventListener('click', () => {
		calculator.appendDecimal();
	});

	/** Attaches event handler to the AC button */
	clearButton.addEventListener('click', button => {
		calculator.clear();
	});

	/** Attaches an event handler to each operation button */
	operationButtons.forEach(button => {
		button.addEventListener('click', () => {
			calculator.chooseOperation(button.getAttribute('data-operation'));
		});
	});

	/** Attaches event handler to the percent button */
	percentButton.addEventListener('click', () => {
		calculator.applyPercentage();
	});

	/** Attaches event handler to the toggle sign button */
	toggleSignButton.addEventListener('click', () => {
		calculator.applyReverseSign();
	});

	/** Attaches event handler to the equal button */
	equalsButton.addEventListener('click', button => {
		calculator.compute();
		calculator.removeRingOperation();
		calculator.updateDisplay();
	});

	/** Attaches an event handler to the keyboard to enable calculator operations via keyboard input. */
	document.addEventListener('keydown', (e) => {
		let updateDisplayRequired = true;

		if (e.key >= 0 && e.key <= 9) {
			calculator.appendNumber(e.key);
		}
		else if (e.key === '.') {
			calculator.appendDecimal();
		}
		else if (['+', '-', '*'].includes(e.key)) {
			calculator.chooseOperation(e.key === '*' ? 'x' : e.key);
			updateDisplayRequired = false;
		}
		else if (e.key === '/') {
			calculator.chooseOperation('÷');
			updateDisplayRequired = false;
		}
		else if (e.key === 'Enter' || e.key === '=') {
			e.preventDefault();
			calculator.compute();
			calculator.removeRingOperation();
		}
		else if (e.key === 'Backspace') {
			calculator.clear();
		}
		else if (e.key === '%') {
			calculator.applyPercentage();
		}
		else if (e.key === 'Escape') {
			calculator.clear();
		}

		if (updateDisplayRequired) {
			calculator.updateDisplay();
		}
	});
});