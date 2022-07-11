class SignUP {

    signUp() {

        const signUp = document.querySelector('.elem-of-container:last-child button');
        const showForm = document.querySelector('.hide-form');
        const closeForm = document.querySelector('.close-elem');

        signUp.addEventListener('click', () => {
            showForm.classList.add('display-form');
        });

        closeForm.addEventListener('click', () => {
            showForm.classList.remove('display-form');
        });
    }
}

new SignUP().signUp();

