import {closeForm} from './closeForm.js'

export function chooseForm() {

    const navContainer = document.querySelector('.nav-container');
    const showFormReg = document.querySelector('.hide-reg-form');
    const showFormIn = document.querySelector('.hide-signIn-form');

    navContainer.addEventListener('click', (event => {
            if (event.target.tagName === 'BUTTON' && event.target.textContent === 'SIGN UP') {
                showFormReg.classList.add('display-form');
                closeForm(showFormReg);
            } else if (event.target.tagName === 'BUTTON' && event.target.textContent === 'SIGN IN') {
                showFormIn.classList.add('display-form');
                closeForm(showFormIn);
            }
            // console.log(event.target);
        }
    ));
    // closeForm();
}

// chooseForm();
