import { useState } from "react"
import BillingInfo from "./billingInfo"
import ShippingInfo from "./shippingInfo"

const CheckoutInfo = () => {
    const [sameAsShipping, setSameAsShipping] = useState('')
    const [checkoutInfo, setCheckoutInfo] = useState({
        "name": '',
        "email": '',
        "phone": '',
        "address": '',
        "unit": '',
        "zip": '',
        "city": '',
        "state": ''
    });
    
    return (
        <>  
            <h3 className="info-lbl">Shipping Information</h3>
            <ShippingInfo/>
            <div className="seperation-line"></div>
            <h3 className="info-lbl">Billing Information</h3>
            <BillingInfo sameAsShipping={sameAsShipping} setSameAsShipping={setSameAsShipping}/>
            <div className="seperation-line"></div>
        </>
    )
    
}

export default CheckoutInfo