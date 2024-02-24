const btn = document.querySelector('#enter');
const userInput = document.querySelector('#userInput');
const ul = document.querySelector('ul');

const createListElem = () => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
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