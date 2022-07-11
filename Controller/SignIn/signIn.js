function signIn() {

    const signInBtn = document.querySelector('.elem-of-container:first-child button');
    const showForm = document.querySelector('.hide-form');
    const closeForm = document.querySelector('.close-elem');
    const form = document.querySelector('.form');
    const toggle = [];

    signInBtn.addEventListener('click', () => {

        showForm.classList.add('display-form');

        for (const formElement of form.children) {
            for (const input of formElement.children) {
                if (input.tagName === 'INPUT') {
                    if (input.id !== 'email' && input.id !== 'password' && input.id !== 'submBtn') {
                        formElement.classList.add('hide-el-of-signIn');
                        toggle.push(formElement);
                    }
                }
            }
        }
    });
    closeForm.addEventListener('click', () => {
        toggle.forEach(divEl => divEl.classList.remove('hide-el-of-signIn'));
        showForm.classList.remove('display-form');
    });
}

signIn();


