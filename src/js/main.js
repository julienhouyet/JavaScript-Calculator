import '../style.css';

// Select all buttons and the display element
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
const displayElement = document.querySelector('.display');

// Update the display when a number button is clicked
function appendNumberToDisplay(number) {
	// Check if length already exceeds 19 characters
	if (displayElement.textContent.length >= 19) return;

	// If '0' is displayed, replace it with the number clicked
	// Else, add the number after
	if (displayElement.textContent === '0') {
		displayElement.textContent = number;
	} else {
		displayElement.textContent += number;
	}
	updateDisplay();
}

// Append a decimal point to the display if it doesn't already contain one
function appendDecimal() {
	// Check if the length already exceeds 19 characters or if a ',' already exists
	if (displayElement.textContent.length >= 19 || displayElement.textContent.includes(',')) return;

	if (!displayElement.textContent.includes(',')) {
		displayElement.textContent += ',';
	}
	updateDisplay();
}

// Attach an event handler to each number button
numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		appendNumberToDisplay(button.textContent);
	});
});

// Attach event handler to the decimal button
decimalButton.addEventListener('click', appendDecimal);

function updateDisplay() {
	const text2xlLength = 9;
	const textxlLength = 14;
	const textlgLength = 17;
	const currentLength = displayElement.textContent.length;

	if (currentLength > textlgLength) {
		// Pour un contenu moyennement long, utilisez une taille de police moyenne
		displayElement.className = 'display text-lg';
	} else if (currentLength > textxlLength) {
		// Pour un contenu moyennement long, utilisez une taille de police moyenne
		displayElement.className = 'display text-xl';
	} else if (currentLength > text2xlLength) {
		// Pour un contenu moyennement long, utilisez une taille de police moyenne
		displayElement.className = 'display text-2xl';
	} else {
		// Pour un contenu court, utilisez la taille de police par défaut
		displayElement.className = 'display text-4xl';
	}
}
