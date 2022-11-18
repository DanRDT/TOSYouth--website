export default checkForCheckoutInfo;


function setEmpty(): void {
    //if no checkout info found or checkout info is incorrect set to this
    localStorage.setItem("CheckoutInfo", JSON.stringify(
    { "shippingInfo": {
            "name": '',
            "email": '',
            "phone": '',
            "address": '',
            "unit": '',
            "zip": '',
            "city": '',
            "state": ''
        }, 
        "billingInfo": {
            "name": '',
            "email": '',
            "phone": '',
            "address": '',
            "unit": '',
            "zip": '',
            "city": '',
            "state": ''
    }}))
}

function checkForCheckoutInfo(): void {
    const CheckoutInfo = localStorage.getItem("CheckoutInfo")
    // check if checkout info exists in local storage
    if (CheckoutInfo == "" || CheckoutInfo == null || CheckoutInfo == "{}") {
        setEmpty()
    }   
    // check if its an object and has proper keys
    try {
        const local = JSON.parse(CheckoutInfo)
        if (local.shippingInfo == undefined || local.billingInfo == undefined) {
            throw new Error("Missing item");
        }
    } catch {
        setEmpty()
    }
}