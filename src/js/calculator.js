export class Calculator {
	/**
	 * Creates an instance of the Calculator.
	 * 
	 * @param {HTMLElement} displayElement - The DOM element that displays the calculation result.
	 * 
	 * The constructor initializes the display element with the one passed as a parameter and
	 * resets the calculator to its initial state. This involves setting the current value to '0'
	 * and ensuring that the display is updated accordingly.
	 */
	constructor(displayElement) {
		this.displayElement = displayElement;
		this.clear();
	}

	/** 
	 * Resets the calculator's current value and operand to their initial state.
	 * 
	 * This function sets the current value to '0' and clears the current operand.
	 * It then updates the display to reflect these changes, essentially resetting the
	 * calculator to its initial state.
	 */
	clear() {
		this.currentValue = '0';
		this.previousValue = '';
		this.currentOperand = '';
		this.updateDisplay();
	}

	/** 
	 * Appends a digit to the current value of the calculator.
	 * 
	 * This function adds a specified digit to the current value, taking into consideration
	 * special conditions such as preventing addition of more digits if the current value (excluding
	 * any decimal point) reaches 19 digits, handling leading zeros, and replacing the initial '0' 
	 * with the new digit if different from '0'.
	 * 
	 * The display is updated after appending the digit to reflect the current state.
	 */
	appendNumber(number) {
		let lengthWithoutDecimal = this.currentValue.replace('.', '').length;

		if (lengthWithoutDecimal >= 19) return;

		if (this.currentValue === '0') {
			if (number === '0') {
				return;
			} else {
				this.currentValue = number;
			}
		} else {
			this.currentValue += number;
		}

		this.updateDisplay();
	}

	/** 
	 * Appends a decimal point to the current value if possible.
	 * 
	 * This function adds a decimal point to the current value if it doesn't already contain one,
	 * and if the total length of the number is less than 19 digits. If the current value is empty,
	 * it starts with '0.' to represent a fractional number properly.
	 */
	appendDecimal() {
		if (this.currentValue.includes('.') || this.currentValue.length >= 19)
			return;

		this.currentValue = this.currentValue ? `${this.currentValue}.` : '0.';

		this.updateDisplay();
	}

	/**
	 * Update the calculator display.
	 * 
	 * This function replaces the display element's content with the current value
	 * and adjusts the display style based on the number of digits to ensure
	 * readability and a consistent user experience.
	 */
	updateDisplay() {
		this.displayElement.textContent = this.currentValue;

		this.updateDisplayStyle();
	}

	updateDisplayStyle() {
		const currentLength = this.displayElement.textContent.length;
		if (currentLength > 17) {
			this.displayElement.className = 'display text-lg';
		} else if (currentLength > 14) {
			this.displayElement.className = 'display text-xl';
		} else if (currentLength > 9) {
			this.displayElement.className = 'display text-2xl';
		} else {
			this.displayElement.className = 'display text-4xl';
		}
	}
}