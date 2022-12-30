export default function useClearRequiredPopup(input :string, inputType :string, shippingOrBilling :string, setCss :object) {
    const regExNormal = /[A-Za-z]+/
    const regExName = /[A-Za-z\'\-]+ [A-Za-z\'\-]+/
    const regExEmail = /[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
    const regExPhone = /^\d{3}-\d{3}-\d{4}$/ //checks for xxx-xxx-xxxx
    const regExZip = /^\d{5}/
    
    // convert to proper key naming convention
    const key :string = (shippingOrBilling + inputType[0].toUpperCase() + inputType.substring(1))
    

    // check if the regEx finds a match
    switch (inputType) {
        case "name":
            if (regExName.test(input)) {
                removeRequiredPopup(key, setCss)
            } break;
        case "email":
            if (regExEmail.test(input)) {
                removeRequiredPopup(key, setCss)
            } break;
        case "phone":
            if (regExPhone.test(input)) {
                removeRequiredPopup(key, setCss)
            } break;
        case "zip":
            if (regExZip.test(input)) {
                removeRequiredPopup(key, setCss)
            } break;
        case "firstName":
        case "lastName":
            if (regExNormal.test(input)) {
                removeRequiredPopup(key, setCss)
            } break;
        default:
            console.error("Not a recognized input type");
            break;
    }
}

// remove css class "required"
function removeRequiredPopup(key :string, setCss) {
    setCss(prev => {
        const tempObject = {...prev, [key]: ""}
        return tempObject
    })
}