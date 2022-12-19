import {ValidatorsOfForm} from '../validators/validatorsOfForm.js';
import {User} from "../../../model/user/User.js";

export function submitForm(form) {

    const validator = new ValidatorsOfForm();
    const valOfElForm = [];

    const submitButton = document.querySelector('.' + form.className + ' button[type="button"]');
    // console.log(submitButton);
    const elementsOfForm = document.querySelectorAll('.' + form.className + ' input:not(.form-group:last-child)');

    const handler = () => {

        elementsOfForm.forEach(element => {
            valOfElForm.push(element.value);
        });

        const user = new User(...valOfElForm);
        valOfElForm.length = 0;

        if (validator.checkFormBeforeSend(form)) {
            console.log(user);
            fetch('http://localhost:3000/formRegistration', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(user)
            }).then(response => console.log(response));
        } else {
            // console.log('lal');
            form.addEventListener('submit', (e) => e.preventDefault(), {once: true});
        }
    };

    submitButton.addEventListener('click', handler);
    // submitButton.removeEventListener('click', handler);
    // console.log(valOfElForm);
}

// submitForm();
