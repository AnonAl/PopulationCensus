export function form(event) {

    const showForm = document.querySelector('.hide-form');
    const closeForm = document.querySelector('.close-elem');
    const form = document.querySelector('.form');
    const h4 = document.querySelector('.header-form h4');
    const btn = document.querySelector('.container-of-elem-form button');
    const hiddenElSignIn = [];
    const inputs = [h4, btn];

    showForm.classList.add('display-form');

    if (event.textContent === 'Sign In') {
        for (const formElement of form.children) {
            for (const input of formElement.children) {
                if (input.tagName === 'INPUT') {
                    if (input.id !== 'email' && input.id !== 'password' && input.id !== 'submBtn') {
                        formElement.classList.add('hide-el-of-form');
                        hiddenElSignIn.push(formElement);
                    }
                }
            }
        }
        inputs.forEach(val => val.textContent = `${event.textContent}`);

    } else {
        inputs.forEach(val => val.textContent = `${event.textContent}`);
    }

    closeForm.addEventListener('click', () => {
        showForm.classList.remove('display-form');
        hiddenElSignIn.forEach(divEl => divEl.classList.remove('hide-el-of-form'));
        form.reset();
    });
}


