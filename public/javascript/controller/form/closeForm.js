export function closeForm(form) {

    const closeElement = document.querySelector('.' + form.classList[0] + ' img[alt="Btn for close form"]').parentElement;

    closeElement.addEventListener('click', () => {
        form.classList.remove('display-form');
        // form.reset();
    }, {once: true});

}

