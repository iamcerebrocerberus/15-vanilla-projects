const colors = ['yellow', 'rgb(56, 212, 23)', 'rgb(34, 212, 123)', '#fff043'];
const btn = document.querySelector('.js-bg__cl-but');
const colorName = document.querySelector('.js-bg__cl-name');
const headerTitle = document.querySelector('.js-header-title');

function getRandomIndex() {
    return Math.floor(Math.random() * colors.length);
}


function setBgColor() {
    const randomNumber = getRandomIndex();
    document.body.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber];
    headerTitle.style.color = colors[randomNumber];
}

btn.addEventListener('click', setBgColor);