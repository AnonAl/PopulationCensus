// import {ValidatorsOfForm} from "../validators/validatorsOfForm.js";
import {formValidBeforeSubm} from "../validators/formValidBeforeSubm.js";
import {User} from "../../model/user/User.js";

export function submitForm(form) {
    // const validator = new ValidatorsOfForm();

    const submitButton = document.querySelector("." + form.className + " button[type=\"button\"]");
    const elementsOfForm = document.querySelectorAll("." + form.className + " input:not(.form-group:last-child)");

    const valOfElForm = [];

    const handler = () => {
        elementsOfForm.forEach(element => {
            valOfElForm.push(element.value);
        });

        const user = new User(...valOfElForm);
        valOfElForm.length = 0;

        if (formValidBeforeSubm(form)) {
            console.log(user);
            fetch("http://localhost:3000/formRegistration", {
                method: "POST",
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(user),
            }).then(response => console.log(response.json()));
        } else {
            // console.log('lal');
            form.addEventListener("submit", (e) => e.preventDefault(), {once: true});
        }
    };

    submitButton.addEventListener("click", handler);
    // submitButton.removeEventListener('click', handler);
    // console.log(valOfElForm);
}

// submitForm();
