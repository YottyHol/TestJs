// main.js

const stateMap = new Map();

// Define the states for different elements
const elements = {
    paragraph: {
        clicked: false,
        original: "Waiting for a click",
        newText: "Unclick Me!"
    },
    button: {
        clicked: false,
        original: "Click Me!",
        alternate: "Clicked!"
    }
};

// Initialize the paragraph text
const paragraph = document.getElementById('dynamic-content');
paragraph.textContent = elements.paragraph.original;

// Initialize the button text
const button = document.getElementById('update-button');
button.textContent = elements.button.original;

// Function to update the content of the paragraph
function updateParagraph() {
    const currentState = stateMap.get('paragraph') || elements.paragraph.clicked;

    if (!currentState) {
        paragraph.textContent = elements.paragraph.original;
        paragraph.textContent = upperCase(paragraph.textContent);
        stateMap.set('paragraph', true); // Update the state to clicked
    } else {
        paragraph.textContent = elements.paragraph.newText;
        stateMap.set('paragraph', false); // Update the state to unclicked
    }
}

// Function to update the button text
function updateButton() {
    const currentState = stateMap.get('button') || elements.button.clicked;

    if (!currentState) {
        button.textContent = elements.button.alternate;
        stateMap.set('button', true); // Update the state to clicked
    } else {
        button.textContent = elements.button.original;
        stateMap.set('button', false); // Update the state to unclicked
    }
}

// Combined update function
function updateContent() {
    updateParagraph();
    updateButton();
}

// Event listener for the button
document.addEventListener('DOMContentLoaded', () => {
    stateMap.set('paragraph', false); // Initialize state for paragraph
    stateMap.set('button', false); // Initialize state for button

    button.addEventListener('click', updateContent);
});

// Function to convert text to uppercase
function upperCase(word) {
    return word.toUpperCase();
}
