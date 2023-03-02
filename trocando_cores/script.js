const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const color = document.querySelector('.color');
const body = document.querySelector('body');
const button = document.querySelector('#button');


button.addEventListener ('click', function() {
    let colorHex = '#';

    for(i = 0; i < 6; i++) {
        colorHex += hex[randomNumber()];
    }

    color.textContent = colorHex;
    body.style.backgroundColor = colorHex;
    button.style.backgroundColor = colorHex;


})

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}
