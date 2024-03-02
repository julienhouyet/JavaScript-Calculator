// Update the display when a number button is clicked
export function appendNumberToDisplay(number, displayElement) {
	// Check if length already exceeds 19 characters
	if (displayElement.textContent.length >= 19) return;

	// If '0' is displayed, replace it with the number clicked
	// Else, add the number after
	if (displayElement.textContent === '0') {
		displayElement.textContent = number;
	} else {
		displayElement.textContent += number;
	}
	updateDisplay(displayElement);
}

// Append a decimal point to the display if it doesn't already contain one
export function appendDecimal(displayElement) {
	// Check if the length already exceeds 19 characters or if a ',' already exists
	if (displayElement.textContent.length >= 19 || displayElement.textContent.includes(',')) return;

	if (!displayElement.textContent.includes(',')) {
		displayElement.textContent += ',';
	}
	updateDisplay(displayElement);
}

// Function to adjust display text size
export function updateDisplay(displayElement) {
	const text2xlLength = 9;
	const textxlLength = 14;
	const textlgLength = 17;
	const currentLength = displayElement.textContent.length;

	if (currentLength > textlgLength) {
		displayElement.className = 'display text-lg';
	} else if (currentLength > textxlLength) {
		displayElement.className = 'display text-xl';
	} else if (currentLength > text2xlLength) {
		displayElement.className = 'display text-2xl';
	} else {
		displayElement.className = 'display text-4xl';
	}
}

// Display reset function
export function resetDisplay(displayElement) {
	displayElement.textContent = '0';
	updateDisplay(displayElement);
}