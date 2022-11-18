export default function useClearRequiredPopup(input :string, inputType :string, shippingOrBilling :string, setCss :object) {
    const regExNormal = /[A-Za-z]+/
    const regExEmail = /[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
    const regExPhone = /^\d{3}-\d{3}-\d{4}$/ //checks for xxx-xxx-xxxx
    const regExZip = /^\d{5}/
    
    // convert to proper key naming convention
    const key :string = (shippingOrBilling + inputType[0].toUpperCase() + inputType.substring(1))
    
    // check if the regEx finds a match
    if (inputType == "name" || inputType == "address" || inputType == "city" || inputType == "state") {
        if (regExNormal.test(input)) {
            removeRequiredPopup(key, setCss)
        }
    } else if (inputType == "email") {
        if (regExEmail.test(input)) {
            removeRequiredPopup(key, setCss)
        }
    } else if (inputType == "phone") {
        if (regExPhone.test(input)) {
            removeRequiredPopup(key, setCss)
        }
    } else if (inputType == "zip") {
        if (regExZip.test(input)) {
            removeRequiredPopup(key, setCss)
        }
    } else {
        console.error("Not a recognized input type");
    }  
}

// remove css class "required"
function removeRequiredPopup(key :string, setCss) {
    setCss(prev => {
        const tempObject = {...prev, [key]: ""}
        return tempObject
    })
}