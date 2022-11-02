const billing = document.querySelector('.billing-info');
const checkbox = document.querySelector('.same-as-shipping');

function checkCheckbox() {
    if (checkbox.checked) {
        billing.classList.add('same-as')
    }
    else if (!checkbox.checked) {
        billing.classList.remove('same-as')
    } 
}

checkCheckbox()
checkbox.addEventListener('change', () => {
    checkCheckbox()
})