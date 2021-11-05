// A PLAN:
// -Grab DOM customElements, assign variable.

const nameName = document.getElementById('name-name');
const inputText = document.getElementById('input-text');
const submitButton = document.getElementById('submit-button');
const topSect = document.getElementById('top');
const btmSect = document.getElementById('btm');


// -Validate that DOM elements have been assigned.
// console.log(nameName);
// console.log(inputText);
// console.log(submitButton);

// console.log(topSect, btmSect);
// --TRUE--

// -Assign variable for array for font-family

const fontArray = ['sketchnote-square, sans-serif', 'permanent-marker, sans-serif', 'subway-berlin-sc, sans-serif', 'ff-providence-sans-web-pro, sans-serif', 'skippy-sharp, sans-serif', 'ff-market-web, sans-serif', 'chauncy-pro, sans-serif', 'tekton-pro, sans-serif', 'subway-new-york-std, sans-serif', 'felt-tip-senior, sans-serif'];


const colorArray = ['dodgerblue', 'blueviolet', 'cadetblue', 'darkcyan', 'darkgoldenrod', 'darkviolet', 'darkslategray', 'red', 'darkgreen', 'darkorange', 'darkseagreen', 'deeppink', 'olivedrab'];


// -Validate that array exists
// console.log(fontArray);
// console.log(colorArray);
// --TRUE--

let i = 0;
let c = 0;
// -Validate that i/c will access array item 0 in fontArray
// console.log(fontArray[i]);
// console.log(colorArray[c]);
// --TRUE

i++;
c++;
// -Validate that i/c will increase and access next array item in fontArray
// console.log(fontArray[i]);
// console.log(colorArray[c]);

// --TRUE

// -Create function for fontChange to nameName, insert function to submitButton
const fontChange = () => {
    nameName.style.fontFamily = fontArray[i % fontArray.length];
    i++;
};


const colorChange = () => {
    topSect.style.background = colorArray[i % colorArray.length];
    btmSect.style.background = colorArray[i % colorArray.length];
    i++;
};

const submitFun = () => {
    const newName = inputText.value;
    fontChange();
    colorChange();
    nameName.textContent = newName;
    inputText.value = ' ';
};

// -Validate submitFun exists
// console.log(submitFun);
// --TRUE

// -Add an event listener to submitButton
// -Replace textContent of nameName with value of inputText

submitButton.addEventListener('click', () => {
    // const newName = inputText.value;

    // -Validate that newName exists
    //console.log(newName);
    // --TRUE--

    // fontChange();

    // colorChange();
    // nameName.textContent = newName;
    // inputText.value = ' ';

    // Created function submitFun for dryer code 
    submitFun();
});