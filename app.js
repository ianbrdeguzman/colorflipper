/*
initialize all posible hex values in an array
*/
const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']

/* 
function to randomize hex values and change HTML content
*/
const hexValue = () => {
    const color = document.getElementById('color');
    const main = document.querySelector('main');
    let hex = '#'
    
    // loop 6 time to get random value from hexArray
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexArray.length);
        hex += hexArray[random];
    }

    // change HTML content
    color.textContent = hex;
    main.style.backgroundColor = hex;
    btn.style.backgroundColor = hex;
};

/*
add an event listener when button is click
callback hexValue function when triggered
*/
document.querySelector('#btn')
    .addEventListener('click', hexValue);

/*
function to open and close about modal window
*/
const about = () => {
    document.querySelector('.modal')
        .classList.toggle('active');
}

/*
event listener when about is clicked
callback about function
*/

document.getElementById('about')
    .addEventListener('click', about);

/*
event listener when X is clicked
callback about function
*/
document.getElementById('close')
    .addEventListener('click', about)