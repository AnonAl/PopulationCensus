class ValidatorsOfForm {
    fullName;
    email;
    password;
    repeatPassword;

    correctFullName() {
        this.fullName = document.querySelector('#fullName');
        let form = document.querySelector('.form');
        this.fullName.addEventListener('blur', () => {
            let valueOfFullName = this.fullName.value;
            if (!(valueOfFullName.match(/^[*A-Za-z]+$\s*/))) {
                for(let element in form.elements){
                    // if(form[element].hasAttribute('onfocus')){
                    //     form[element].setAttribute('disabled','');
                    // }
                    form[element].style.cssText = `
                    background-color: grey;
                    `;
                    form[element].setAttribute('disabled', 'disabled');
                }
            }
            console.log(event);
        })


    }
}

let formValid = new ValidatorsOfForm();
formValid.correctFullName();
