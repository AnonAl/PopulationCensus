class ValidatorsOfForm {
    fullName;
    email;
    password;
    repeatPassword;
    submit = document.querySelector('button[type=button]');
    form = document.querySelector('.form');

    fieldHighlighting(eventTarget) {
        eventTarget.classList.add('field-highlight');
        this.submit.setAttribute('disabled', '');
    }

    fieldUnHighlighting(eventTarget) {
        eventTarget.classList.remove('field-highlight');
        this.submit.disabled = false;
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
            console.log(this.password.value);
            console.log(this.repeatPassword.value);
            alert('Passwords don\'t match!');
            return true;
        }
    }

    submitButton() {
        this.submit.addEventListener('click', () => {
            if (this.correctName() || this.correctEmail() || this.correctPassword() || this.correctRepPassword()) {
                this.form.addEventListener('submit', (event) => event.preventDefault());
                setTimeout(() => alert('The form has empty fields !!!'), 500);
            } else {
                this.form.submit();
                alert('Registration success');
            }
        });

    }

    formElement() {
        this.form.addEventListener('change', (event) => {
            switch (event.target.id) {
                case 'name':
                    if (this.correctName()) {
                        this.fieldHighlighting(event.target);
                        console.log('dsfsd');
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
        this.submitButton();
    }
}

new ValidatorsOfForm().formElement();

