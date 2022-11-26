import {ValidatorsOfForm} from '../validators/validatorsOfForm.js';
import {User} from "../../../model/user/User.js";

function submitForm() {
    const correctForm = new ValidatorsOfForm();
    const submitBtn = document.querySelector('.submit-btn');
    const valOfElForm = [];
    const elementsOfForm = document.querySelectorAll('.form-group input:not(.form-group:last-child)');
    const form = document.querySelector('.form');

    // console.log(submitBtn);

    submitBtn.addEventListener('click', () => {
        elementsOfForm.forEach(element => {
            valOfElForm.push(element.value);
        });

        const user = new User(...valOfElForm);

        if (correctForm.formValidation()) {
            fetch('/formRegistration', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(user)
            })
        } else {
            form.addEventListener('submit', (e) => e.preventDefault());
        }
    });
    console.log(valOfElForm);
}

async function getData() {
    const user = await fetch('/formRegistration').then(res => console.log(res));
    console.log(user);
}

submitForm();
// getData();
