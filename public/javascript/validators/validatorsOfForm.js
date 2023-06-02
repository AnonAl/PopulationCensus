export class ValidatorsOfForm {
    fullName;
    email;
    password;
    repeatPassword;
    // _errorMessage = "The form has empty fields \n or incorrect value in field  !!!";
    // send;

    fieldHighlighting(eventTarget) {
        eventTarget.classList.add("field-highlight");
    }

    fieldUnHighlighting(eventTarget) {
        eventTarget.classList.remove("field-highlight");
    }

    correctName(event) {
        this.fullName = event.target.value;
        if (!(this.fullName.match(/^[*A-Za-z]+$\s*/))) {
            return true;
        }
    }

    correctEmail(event) {
        this.email = event.target?.value;
        if (!(this.email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/))) {
            return true;
        }
    }

    correctPassword(event) {
        this.password = event.target?.value;
        if (!(this.password.match(/[0-9a-zA-Z*]{6,}/))) {
            if (this.password.length < 6) {
                alert("The password is less !!!");
            }
            return true;
        }
    }

    correctRepPassword(event) {
        this.repeatPassword = event.target?.value;
        if (!(this.repeatPassword === this.password)) {
            // console.log(this.password.value);
            // console.log(this.repeatPassword.value);
            alert("Passwords don't match!");
            return true;
        }
    }

}
