import { ValidatorsOfForm } from "../../../public/javascript/validators/validatorsOfForm.js";
import { submitForm } from "./submitForm.js";

export function validSignIn () {
    // console.log(typeof form.className);
    const form = document.querySelector(".signIn-form");
    const validator = new ValidatorsOfForm();

    form.addEventListener("change", (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
        switch (event.target.name) {
        case "email":
            if (validator.correctEmail(event)) {
                validator.fieldHighlighting(event.target);
            } else {
                validator.fieldUnHighlighting(event.target);
            }
            break;
        case "password":
            if (validator.correctPassword(event)) {
                validator.fieldHighlighting(event.target);
            } else {
                validator.fieldUnHighlighting(event.target);
            }
            break;
        }
    });
    // validator.checkFormBeforeSend(form);
    submitForm(form);
}
validSignIn();
