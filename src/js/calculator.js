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
	constructor(displayElement, operationButtons) {
		this.displayElement = displayElement;
		this.operationButtons = operationButtons;
		this.clear();
		this.shouldResetScreen = false;
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
		this.operation = '';
		this.shouldResetScreen = false;
		this.updateDisplay();
	}

	/** 
	 * Appends a digit to the current value of the calculator.
	 * 
	 * @param {string} number - The digit to be appended to the current value of the calculator.
	 * 
	 * This function adds a specified digit to the current value, taking into consideration
	 * special conditions such as preventing addition of more digits if the current value (excluding
	 * any decimal point) reaches 19 digits, handling leading zeros, and replacing the initial '0' 
	 * with the new digit if different from '0'.
	 * 
	 * The display is updated after appending the digit to reflect the current state.
	 *
	 */
	appendNumber(number) {

		if (this.shouldResetScreen) {
			this.currentValue = '';
			this.shouldResetScreen = false;
		}

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
	 * Sets the current operation and prepares for the next value.
	 * 
	 * This function is called when the user selects an operation (e.g., addition).
	 * If there's already a current value, and a new operation is chosen, it performs
	 * the previously set operation by calling `compute`. It then stores the current
	 * operation and sets the previous value to the current value, preparing for the
	 * next value to be entered.
	 * 
	 * @param {string} operation - The operation to perform (e.g., '+').
	 */
	chooseOperation(operation) {

		this.removeRingOperation();
		this.addRingOperation(operation);

		if (this.currentValue === '') return;
		if (this.previousValue !== '' && !this.shouldResetScreen) {
			this.compute();
		}
		this.operation = operation;
		this.previousValue = this.currentValue;
		this.currentValue = '';
		this.shouldResetScreen = false;
	}

	/**
	 * Applies the percentage operation to the current value.
	 * 
	 * This function calculates the percentage of the current value by dividing it by 100.
	 * It is triggered when the user presses the '%' button. The result is immediately displayed.
	 */
	applyPercentage() {
		if (this.currentValue === '') return;

		const result = parseFloat(this.currentValue) / 100;
		this.currentValue = result.toString();
		this.shouldResetScreen = true;

		this.updateDisplay();
	}

	/**
	 * Inverses the sign of the current value displayed on the calculator.
	 * 
	 * This function checks if the current value is valid and, if so, multiplies it by -1
	 * to inverse its sign. The updated value is then converted back to a string to be
	 * displayed. This allows the user to easily switch between positive and negative
	 * numbers without having to manually enter a negative sign or perform subtraction.
	 */
	applyReverseSign() {
		if (!this.currentValue) return;

		const currentValueNum = parseFloat(this.currentValue);

		if (isNaN(currentValueNum)) return;

		this.currentValue = (currentValueNum * -1).toString();

		this.updateDisplay();
	}

	/**
	 * Performs the computation based on the current and previous values and the selected operation.
	 * 
	 * This function calculates the result of the operation selected by the user (e.g., addition),
	 * using the previous and current values. It supports various operations and defaults to doing
	 * nothing if the operation is not recognized. After computing, it updates the current value with
	 * the result, clears the operation, and updates the display to show the result.
	 */
	compute() {

		let computation;
		const prev = parseFloat(this.previousValue);
		const current = parseFloat(this.currentValue);
		if (isNaN(prev) || isNaN(current)) return;
		switch (this.operation) {
			case '+':
				computation = prev + current;
				break;
			case '-':
				computation = prev - current;
				break;
			case '%':
				computation = prev / current;
				break;
			case 'x':
				computation = prev * current;
				break;
			default:
				return;
		}
		this.currentValue = computation.toString();
		this.operation = '';
		this.previousValue = '';
		this.shouldResetScreen = true;

		this.updateDisplay();
	}

	/**
	 * Update the calculator display with the current value.
	 * 
	 * This function displays the current value in the calculator's display element. 
	 * For readability and to ensure a consistent user experience, it adjusts the display 
	 * style based on the number of digits. When the current value is too large, too small, 
	 * or exceeds the display capacity (more than 19 digits), it formats the number using 
	 * scientific notation to keep the display concise and readable.
	 * 
	 */
	updateDisplay() {
		let displayValue = this.currentValue;

		const floatValue = parseFloat(displayValue);

		if (!isNaN(floatValue)) {
			if (displayValue.length > 19 || floatValue >= 1e19 || floatValue <= -1e19) {
				displayValue = floatValue.toPrecision(15).toString();
			}
		}
		this.displayElement.textContent = this.currentValue;

		this.updateDisplayStyle();
	}

	/**
	 * Adjusts the display style based on the current number of characters.
	 * 
	 * This method dynamically adjusts the font size of the display element based on the current
	 * length of its content. It ensures that longer numbers are shown with a smaller font size to
	 * fit within the display area, maintaining readability and a visually appealing interface.
	 * The size adjustments are made through the application of CSS classes that correspond to
	 * different font sizes.
	 */
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

	/**
	 * Removes the visual indicator (ring) from all operation buttons.
	 * 
	 * This method iterates over all operation buttons and removes specific Tailwind CSS classes
	 * that create a ring effect around the button. It is used to clear any previous indication
	 * of a selected operation when a new operation is chosen or the calculation is reset.
	 */
	removeRingOperation() {
		this.operationButtons.forEach(button => button.classList.remove('ring-1', 'ring-neutral-900', 'ring-inset'));
	}


	/**
	 * Adds a visual indicator (ring) to the currently selected operation button.
	 * 
	 * @param {string} operation - The operation symbol (e.g., '+', '-', '*', '/') as used in the calculation logic.
	 *                             It should match the 'data-operation' attribute of the operation buttons.
	 * 
	 * This method finds the operation button that matches the currently selected operation
	 * and adds Tailwind CSS classes to create a ring effect around the button. This visual
	 * indicator helps users see which operation is currently active or was last selected.
	 */
	addRingOperation(operation) {
		const selectedOperationButton = Array.from(this.operationButtons).find(button => button.getAttribute('data-operation') === operation);
		if (selectedOperationButton) {
			console.log("Bouton trouvé :", selectedOperationButton);
			selectedOperationButton.classList.add('ring-1', 'ring-neutral-900', 'ring-inset');
		}
	}
}