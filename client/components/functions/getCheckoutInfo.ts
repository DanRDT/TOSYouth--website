export default function getCheckoutInfo(info) {

    if (info == 'shipping') {
        return (JSON.parse(localStorage.getItem("CheckoutInfo"))).shippingInfo
    } else if (info == 'billing') {
        return (JSON.parse(localStorage.getItem("CheckoutInfo"))).billingInfo
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