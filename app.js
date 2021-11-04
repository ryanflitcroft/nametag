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

const fontArray = ['permanent-marker, sans-serif', 'subway-berlin-sc, sans-serif', 'ff-providence-sans-web-pro, sans-serif', 'skippy-sharp, sans-serif', 'ff-market-web, sans-serif', 'chauncy-pro, sans-serif', 'tekton-pro, sans-serif', 'felt-tip-senior, sans-serif'];

// -Validate that array exists
// console.log(fontArray);
// --TRUE--

let i = 0;
// -Validate that i will access array item 0 in fontArray
// console.log(fontArray[i]);
// --TRUE

i++;
// -Validate that i will increase and access next array item in fontArray
// console.log(fontArray[i]);
// --TRUE

// -Create function for fontChange to nameName, insert function to submitButton
const fontChange = () => {
    nameName.style.fontFamily = fontArray[i % fontArray.length];
    i++;
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

