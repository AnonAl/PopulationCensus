import { ValidatorsOfForm } from "../../../public/javascript/validators/validatorsOfForm.js";
import { submitForm } from "./submitForm.js";

export function validSignUp () {
    const validator = new ValidatorsOfForm();
    const form = document.querySelector(".reg-form");

    form.addEventListener("change", (event) => {
        switch (event.target.name) {
        case "name":
            if (validator.correctName(event)) {
                validator.fieldHighlighting(event.target);
            } else {
                validator.fieldUnHighlighting(event.target);
            }
            break;
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
        case "repPass":
            if (validator.correctRepPassword(event)) {
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
validSignUp();
