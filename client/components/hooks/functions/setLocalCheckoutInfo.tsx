export default function setLocalCheckoutInfo(shippingInfo: object, billingInfo: object) {
    //set local storage to current info state
    localStorage.setItem("CheckoutInfo", JSON.stringify({
        "shippingInfo": shippingInfo, "billingInfo": billingInfo}))
}