export function btnStyle () {
    const submitBtns = document.querySelectorAll(":is(.reg-submit-btn, .signIn-submit-btn)");
    // console.log(submitBtn);
    submitBtns.forEach(sbmtBtn => {
        sbmtBtn.addEventListener("click", (e) => {
            // console.log(submitBtn);
            // console.log(e);
            const addDiv = document.createElement("div");
            const rect = sbmtBtn.getBoundingClientRect();
            const mValue = Math.max(sbmtBtn.clientWidth, sbmtBtn.clientHeight);
            const sDiv = addDiv.style;
            const px = "px";

            sDiv.width = sDiv.height = mValue + px;
            sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
            sDiv.left = e.clientX - rect.left - (mValue / 2) + px;

            addDiv.classList.add("pulse");
            sbmtBtn.appendChild(addDiv);
        });
    }
    );
}

btnStyle();
