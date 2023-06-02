export function formValidBeforeSubm(form) {
    // this.checkFormBeforeSend.send;
    const errorMessage = "The form has empty fields \n or incorrect value in field  !!!";
    let formHasError = false;
    // this.checkFormBeforeSend.send = false;
    const elementsOfForm = document.querySelectorAll("." + form.className + " input");
    const submitButton = document.querySelector("." + form.className + " button[type=\"button\"]");

    const handler = function () {
        for (const element of elementsOfForm) {
            if (element.classList.contains("field-highlight") || element.value === "") {
                // formHasError++;
                // if (formHasError >= 1) {
                //     alert(this._errorMessage);
                //     this.checkFormBeforeSend.send = false;
                //     break;
                //     // return false;
                // }
                alert(errorMessage);
                console.log(formHasError);
                return formHasError;
            } else {
                //this.checkFormBeforeSend.send = true;
                formHasError = true;
                return formHasError;
                // return true;
            }
        }
    };

    console.log(this);

    submitButton.addEventListener("click",  handler.bind(), {once: true});
    // console.log(error);
    // Object.seal();
    // Object.preventExtensions();
    // Object.isExtensible();
    // Object.isSealed();
    // this.checkFormBeforeSend.send
    return error;

}
