const HEX_COLORS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.js-bg__cl-but');
const colorName = document.querySelector('.js-bg__cl-name');
const headerTitle = document.querySelector('.js-header-title');

function getRandomIndex() {
    return Math.floor(Math.random() * HEX_COLORS.length);
}

function setHexColors() {
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) hexcolor += HEX_COLORS[getRandomIndex()];
    document.body.style.backgroundColor = hexcolor;
    colorName.textContent = hexcolor;
    btn.style.backgroundColor = hexcolor;
    headerTitle.style.color = hexcolor;
}

btn.addEventListener('click', setHexColors);
