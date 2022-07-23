import {form} from '../../Controller/Form/form.js'

function chooseForm() {

    const navContainer = document.querySelector('.container-of-navigation');

    navContainer.addEventListener('click', (event => {
        if (event.target.tagName === 'BUTTON') {
            form(event.target);
        }
    }));
}

chooseForm();
