const grocery = document.querySelector('.grocery');
const pencil = document.querySelector('.imgPin');
let inpList = document.querySelector('.inputList');
let allGrocery = document.querySelector('.allGrocery');

pencil.onclick = () => {
    allGrocery.innerHTML = '';
}

inpList.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        addItem();
    }
})

function addItem() {
    let h2 = document.createElement('h2');
    h2.innerHTML = '- ' + inpList.value;

    h2.onclick = () => {
        h2.style.textDecoration = 'line-through';
        h2.style.color = 'rgb(33, 167, 0)';
    }

    allGrocery.insertAdjacentElement('beforeend', h2);

    inpList.value = '';
}