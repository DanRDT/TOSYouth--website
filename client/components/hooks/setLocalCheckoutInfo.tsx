export default function setLocalCheckoutInfo(shippingInfo, billingInfo) {
    localStorage.setItem("CheckoutInfo", JSON.stringify({
        "shippingInfo":shippingInfo, "billingInfo":billingInfo}))
}