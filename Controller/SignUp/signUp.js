class SignUP {

    signUp() {
        let signUp = document.querySelector('.elem-of-container:last-child button');
        let showForm = document.querySelector('.show-form');
        let closeForm = document.querySelector('.close-form');

        signUp.addEventListener('click', () => {
            showForm.style.cssText = `
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            height: 100%; 
            background: rgba(38, 54, 63, 0.8);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100;
            `;
        });
        closeForm.addEventListener('click', () => {
            showForm.style.cssText = `
            display:none;
            `;
        });
    }
}

new SignUP().signUp();

