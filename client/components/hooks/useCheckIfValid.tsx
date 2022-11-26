export default function checkIfValid(input: string, inputType: string, shippingOrBilling: string, setCss): number {
    let checkoutInfoValid = true;
    const regExNormal = /[A-Za-z]+/
    const regExName = /[A-Za-z\'\-]+ [A-Za-z\'\-]+/
    const regExEmail = /[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
    const regExPhone = /^\d{3}-\d{3}-\d{4}$/ //checks for xxx-xxx-xxxx
    const regExZip = /^\d{5}/
    
    // convert to proper key naming convention
    const key: string = (shippingOrBilling + inputType[0].toUpperCase() + inputType.substring(1))
    
    // check if the regEx finds a match
    if (inputType == "address" || inputType == "city" || inputType == "state") {
        if (!regExNormal.test(input)) {
            checkoutInfoValid = false
            addRequiredPopup(key, setCss)
        }
    } else if (inputType == "name") {
        if (!regExName.test(input)) {
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
    
    // switch (inputType) {
    //     case "name":
    //         if (!regExName.test(input)) {
    //             checkoutInfoValid = false
    //             addRequiredPopup(key, setCss)
    //         } break;
    //     case "email":
    //         if (!regExEmail.test(input)) {
    //             checkoutInfoValid = false
    //             addRequiredPopup(key, setCss)
    //         } break;
    //     case "phone":
    //         if (!regExPhone.test(input)) {
    //             checkoutInfoValid = false
    //             addRequiredPopup(key, setCss)
    //         } break;
    //     case "zip":
    //         if (!regExZip.test(input)) {
    //             checkoutInfoValid = false
    //             addRequiredPopup(key, setCss)
    //         } break;
    //     case "address":
    //     case "city":
    //     case "state":
    //         if (!regExNormal.test(input)) {
    //             checkoutInfoValid = false
    //             addRequiredPopup(key, setCss)
    //         } break;
    // }

    if (checkoutInfoValid == true) {
        return 0
    } else {
        return 1
    }
}
    
// add css class "required"
function addRequiredPopup(key: string, setCss): void {
    setCss(prev => {
        const tempObject = {...prev, [key]: "required"}
        return tempObject
    })
}