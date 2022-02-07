const countValue = document.querySelector('.js-count');
const btns = document.querySelectorAll('button');
let count = 0;

btns.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const styleClassList = e.target.classList;

        if (styleClassList.contains('js-decrease')) {
            count--;
        } else if (styleClassList.contains('js-increase')) {
            count++;
        } else {
            count = 0;
        }

        countStyle(count);
        countValue.textContent = count;
    });
})

function countStyle(count) {
    (count > 0) ? countValue.style.color = 'green' :
    (count < 0) ? countValue.style.color = 'red' :
    countValue.style.color = 'black';
}