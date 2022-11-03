const billing = document.querySelector('.billing-info');
const checkbox = document.querySelector('.same-as-shipping');
const container = document.querySelector('.same-as-shipping-container');

function checkCheckbox() {
    if (checkbox.checked) {
        billing.classList.add('same-as')
        container.classList.add('same-as')
    }
    else if (!checkbox.checked) {
        billing.classList.remove('same-as')
        container.classList.remove('same-as')
    } 
}

checkCheckbox()
checkbox.addEventListener('change', () => {
    checkCheckbox()
})