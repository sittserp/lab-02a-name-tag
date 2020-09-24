// import functions and grab DOM elements

const theInput = document.getElementById('user-input');
const theSection = document.getElementById('name');
const theButton = document.getElementById('submitButton')

// set event listeners to update state and DOM

theButton.addEventListener('click', () => {
    // GET the input's value
    const value = theInput.value;

    // SET the h3's textContent to the value (defined outcome 
    //-- validate that it happened)
    theSection.textContent = value;

    // clear the input
    theInput.value = '';

});

