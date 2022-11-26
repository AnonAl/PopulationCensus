import {closeForm} from './closeForm.js'

function chooseForm() {

    const navContainer = document.querySelector('.nav-container');
    const showFormReg = document.querySelector('.hide-form-reg');
    const showFormIn = document.querySelector('.hide-form-in');

    navContainer.addEventListener('click', (event => {
            if (event.target.tagName === 'BUTTON' && event.target.textContent === 'SIGN UP') {
                showFormReg.classList.add('display-form');
            } else if (event.target.tagName === 'BUTTON' && event.target.textContent === 'SIGN IN') {
                showFormIn.classList.add('display-form');
            }
        }
    ));

    closeForm();

}

chooseForm();
