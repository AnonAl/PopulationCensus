export class ValidatorsOfForm {
    fullName;
    email;
    password;
    repeatPassword;
    submitBtn = document.querySelector('.submit-btn');
    form = document.querySelector('.form');
    _errorMessage = 'The form has empty fields \n or incorrect value in field  !!!';

    fieldHighlighting(eventTarget) {
        eventTarget.classList.add('field-highlight');
        // this.submitBtn.setAttribute('disabled', '');
    }

    fieldUnHighlighting(eventTarget) {
        eventTarget.classList.remove('field-highlight');
        this.submitBtn.disabled = false;
    }

    correctName() {
        this.fullName = document.querySelector('#name');
        if (!(this.fullName.value.match(/^[*A-Za-z]+$\s*/))) {
            return true;
        }
    }

    correctEmail() {
        this.email = document.querySelector('#email');
        if (!(this.email.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/))) {
            return true;
        }
    }

    correctPassword() {
        this.password = document.querySelector('#password');
        if (!(this.password.value.match(/[0-9a-zA-Z*]{6,}/))) {
            if (this.password.value.length < 6) {
                alert('The password is less !!!');
            }
            return true;
        }
    }

    correctRepPassword() {
        this.repeatPassword = document.querySelector('#repPass');
        if (!(this.repeatPassword.value === this.password.value)) {
            // console.log(this.password.value);
            // console.log(this.repeatPassword.value);
            alert('Passwords don\'t match!');
            return true;
        }
    }

    formValidation() {
        // console.log(this.submitBtn);
        switch (this.submitBtn.textContent) {
            case 'SIGN UP':
                if (this.correctName() || this.correctEmail() || this.correctPassword() || this.correctRepPassword()) {
                    // this.form.addEventListener('submit', (event) => event.preventDefault());
                    alert(this._errorMessage);
                    return false;
                } else {
                    alert('Registration success');
                    return true;
                }
                break;
            case 'SIGN IN':
                if (this.correctEmail() || this.correctPassword()) {
                    alert(this._errorMessage);
                    return false;

                } else {
                    // this.form.submit();
                    alert('Login completed success!');
                    return true
                }
                break;
        }

    }

    fieldValidation() {
        this.form.addEventListener('change', (event) => {
            switch (event.target.id) {
                case 'name':
                    if (this.correctName()) {
                        this.fieldHighlighting(event.target);
                    } else {
                        this.fieldUnHighlighting(event.target);
                    }
                    break;
                case 'email':
                    if (this.correctEmail()) {
                        this.fieldHighlighting(event.target);
                    } else {
                        this.fieldUnHighlighting(event.target);
                    }
                    break;
                case 'password':
                    if (this.correctPassword()) {
                        this.fieldHighlighting(event.target);
                    } else {
                        this.fieldUnHighlighting(event.target);
                    }
                    break;
                case 'repPass':
                    if (this.correctRepPassword()) {
                        this.fieldHighlighting(event.target);
                    } else {
                        this.fieldUnHighlighting(event.target);
                    }
                    break;
            }
        });
        // this.formValidation();
    }
}

new ValidatorsOfForm().fieldValidation();

