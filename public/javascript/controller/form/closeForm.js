export function closeForm() {

    const closeElements = document.getElementsByClassName('close-elem');

    const displayFormReg = document.querySelector('.hide-form-reg');
    const displayFormIn = document.querySelector('.hide-form-in');

    for (let clsElem of closeElements) {
        clsElem.addEventListener('click', () => {
            displayFormReg.classList.remove('display-form');
            displayFormIn.classList.remove('display-form');
        })
    }
}
