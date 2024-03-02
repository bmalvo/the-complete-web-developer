const btn = document.querySelector('#enter');
const userInput = document.querySelector('#userInput');
const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');

const createListElem = () => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    li.addEventListener('click', addButton(li));
    userInput.value = '';
}

const addAfterClick = () => {
    if (userInput.value) {
        console.log(userInput.value)
        createListElem();
    }
};

const addafterKeydown = (event) => {
    if (userInput.value && event.key === 'Enter') {
        createListElem();
    }
};

btn.addEventListener('click', addAfterClick);
userInput.addEventListener('keydown', addafterKeydown);

const addButton = (el) => { 
    el.addEventListener('click', () => {
        el.classList.toggle('done');
        isButton = el.lastChild.nodeName.toString() === 'BUTTON'
        if (!isButton) {    
            const newButton = document.createElement('button');
            newButton.textContent = 'delete';
            el.appendChild(newButton);
            newButton.addEventListener('click', () => {
                el.remove();
            })
        }
    });
}

items.forEach(el => addButton(el));
