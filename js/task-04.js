let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decreaseBtn = document.querySelector('#counter').firstElementChild;
const increaseBtn = document.querySelector('#counter').lastElementChild;

increaseBtn.addEventListener('click', event => {
    valueEl += 1;
    counterValue.innerText = valueEl;
    });


decreaseBtn.addEventListener('click', event => {
    valueEl -= 1;
    counterValue.innerText = valueEl;
     });