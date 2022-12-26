export default function getCheckoutInfo(info: string) {
    // return proper checkout info from local storage
    if (info == 'shipping') {
        return (JSON.parse(localStorage.getItem("CheckoutInfo"))).shippingInfo
    } else {
        console.error("Checkout Object "+info+" not found");
        return {
            "name": '',
            "email": '',
            "phone": '',
            "address": '',
            "unit": '',
            "zip": '',
            "city": '',
            "state": ''
        }
    }
}