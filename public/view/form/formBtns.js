function btnStyle() {
    const submitBtn = document.querySelector('.submit-btn');
    //console.log(submitBtn);
    submitBtn.addEventListener('click', (e) => {
        //console.log(submitBtn);
        //console.log(e);
        let addDiv = document.createElement('div'),
            rect = submitBtn.getBoundingClientRect(),
            mValue = Math.max(submitBtn.clientWidth, submitBtn.clientHeight);
        let sDiv = addDiv.style,
            px = 'px';

        sDiv.width = sDiv.height = mValue + px;
        sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
        sDiv.left = e.clientX - rect.left - (mValue / 2) + px;

        addDiv.classList.add('pulse');
        submitBtn.appendChild(addDiv);
    });
}

btnStyle();
