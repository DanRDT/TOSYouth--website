export default checkForCheckoutInfo;

function setEmpty() {
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

function checkForCheckoutInfo() {
    const CheckoutInfo = localStorage.getItem("CheckoutInfo")

    if (CheckoutInfo == "" || CheckoutInfo == null || CheckoutInfo == "{}") {
        setEmpty()
    }   
    try {
        const local = JSON.parse(CheckoutInfo)
        if (local.shippingInfo == undefined || local.billingInfo == undefined) {
            throw new Error("Missing item");
        }
    } catch {
        setEmpty()
    }
}