// A PLAN:
// -Grab DOM customElements, assign variable.

const nameName = document.getElementById('name-name');
const inputText = document.getElementById('input-text');
const submitButton = document.getElementById('submit-button');

// -Validate that DOM elements have been assigned.
// console.log(nameName);
// console.log(inputText);
// console.log(submitButton);
// --TRUE--

// -Assign variable for array for font-family

const fontArray = ['felt-tip-senior, sans-serif', 'subway-berlin-sc, sans-serif', 'sans-serif', 'ff-providence-sans-web-pro, sans-serif', 'skippy-sharp, sans-serif', 'ff-market-web, sans-serif', 'chauncy-pro, sans-serif', 'sketchnote-square, sans-serif']

// -Validate that array exists
// console.log(fontArray);
// --TRUE--

const fontChange = () => {
    for (let i = 0; i < fontArray.length; i++) {
        const newFont = fontArray[i];
        console.log(newFont);
        nameName.style.fontFamily = newFont;
    }
};

// -Add an event listener to submitButton
// -Replace textContent of nameName with value of inputText

submitButton.addEventListener('click', () => {
    const newName = inputText.value;

    // -Validate that newName exists
    //console.log(newName);
    // --TRUE--

    fontChange();
    nameName.textContent = newName;
    inputText.value = ' ';
});

