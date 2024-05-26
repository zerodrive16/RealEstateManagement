function changeButtonText() {
    const loginButton = document.getElementById("loginButton");
    const radioButton = document.getElementById("seller");
    let selectedVal = "";

    radioButton.forEach(radio => {
        if(radio.checked) {
            selectedVal = radio.value;
        }
    });

    if(selectedVal) {
        loginButton.textContent = `Angemeldet (${selectedVal})`;
    } else {
        loginButton.textContent= `Anmelden`;
    }
}
document.querySelectorAll('input[name="seller"]').forEach(radio => {
    radio.addEventListener('change', changeButtonText);
});
changeButtonText();

