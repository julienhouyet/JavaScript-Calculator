export class Calculator {
	/**
	 * Calculator constructor.
	 * Initializes display and operation buttons, and resets state.
	 */
	constructor(displayElement, operationButtons) {
		this.displayElement = displayElement;
		this.operationButtons = operationButtons;
		this.clear();
	}

	/** Resets the calculator to its default state. */
	clear() {
		this.currentValue = '0';
		this.previousValue = '';
		this.operation = '';
		this.shouldResetScreen = false;
		this.updateDisplay();
	}

	/** Appends a digit to the current value, managing leading zeros and max digit length. */
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

	/** Appends a decimal point if not already present. */
	appendDecimal() {
		if (this.currentValue.includes('.') || this.currentValue.length >= 19)
			return;

		this.currentValue = this.currentValue ? `${this.currentValue}.` : '0.';

		this.updateDisplay();
	}

	/** Chooses an operation, computes if necessary, and prepares for the next value. */
	chooseOperation(operation) {

		this.removeRingOperation();
		this.addRingOperation(operation);

		if (this.currentValue === '') {
			this.operation = operation;
			return;
		}

		if (this.previousValue !== '' && !this.shouldResetScreen) {
			this.compute();
		}
		this.operation = operation;
		this.previousValue = this.currentValue;
		this.currentValue = '';
		this.shouldResetScreen = false;
	}

	/** Calculates and displays percentage of the current value. */
	applyPercentage() {
		if (this.currentValue === '') return;

		const result = parseFloat(this.currentValue) / 100;
		this.currentValue = result.toString();
		this.shouldResetScreen = true;

		this.updateDisplay();
	}

	/** Inverts the sign of the current value. */
	applyReverseSign() {
		if (!this.currentValue) return;

		const currentValueNum = parseFloat(this.currentValue);

		if (isNaN(currentValueNum)) return;

		this.currentValue = (currentValueNum * -1).toString();

		this.updateDisplay();
	}

	/** Performs the current operation and updates the display with the result. */
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
			case '÷':
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

	/** Updates the display with the current value, applying notation adjustment for large numbers. */
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

	/** Dynamically adjusts display font size based on content length for readability. */
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

	/** Clears the visual indicator from all operation buttons. */
	removeRingOperation() {
		this.operationButtons.forEach(button => button.classList.remove('ring-1', 'ring-neutral-900', 'ring-inset'));
	}


	/** Adds a visual indicator to the currently selected operation button. */
	addRingOperation(operation) {
		const selectedOperationButton = Array.from(this.operationButtons).find(button => button.getAttribute('data-operation') === operation);
		if (selectedOperationButton) {
			console.log("Bouton trouvé :", selectedOperationButton);
			selectedOperationButton.classList.add('ring-1', 'ring-neutral-900', 'ring-inset');
		}
	}
}