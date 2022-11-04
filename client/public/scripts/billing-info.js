let billing = document.querySelector('.billing-info');
let checkbox = document.querySelector('.same-as-shipping');
let container = document.querySelector('.same-as-shipping-container');

setInterval(() => {
    billing = document.querySelector('.billing-info');
    checkbox = document.querySelector('.same-as-shipping');
    container = document.querySelector('.same-as-shipping-container');
    try {
        checkbox.addEventListener('change', () => {
            checkCheckbox()
        })
    } catch {}
}, 5000);

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