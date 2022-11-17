export default function checkIfValid(input :string, inputType :string, shippingOrBilling :string, setCss) {
    let checkoutInfoValid = true;
    const regExNormal = /[A-Za-z]+/
    const regExPhone = /^\d{3}-\d{3}-\d{4}$/
    const regExZip = /^\d{5}/
    const regExEmail = /[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
    
    const key :string = (shippingOrBilling + inputType[0].toUpperCase() + inputType.substring(1))
    
    if (inputType == "name" || inputType == "address" || inputType == "city" || inputType == "state") {
        if (!regExNormal.test(input)) {
            checkoutInfoValid = false
            addRequiredPopup(key, setCss)
        }
    } else if (inputType == "email") {
        if (!regExEmail.test(input)) {
            checkoutInfoValid = false
            addRequiredPopup(key, setCss)
        }
    } else if (inputType == "phone") {
        if (!regExPhone.test(input)) {
            checkoutInfoValid = false
            addRequiredPopup(key, setCss)
        }
    } else if (inputType == "zip") {
        if (!regExZip.test(input)) {
            checkoutInfoValid = false
            addRequiredPopup(key, setCss)
        }
    }
    if (checkoutInfoValid == true) {
        return
    } else {
        return checkoutInfoValid
    }
}
    

function addRequiredPopup(key, setCss) {
    setCss(prev => {
        const tempObject = {...prev, [key]: "required"}
        return tempObject
    })
}