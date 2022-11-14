import { useEffect, useState } from "react"
import checkForShoppingCart from "../../functions/checkForShoppingCart";
import BillingInfo from "./billingInfo"
import ShippingInfo from "./shippingInfo"

const CheckoutInfo = () => {
    const [shippingInfo, setShippingInfo] = useState({
        "name": '',
        "email": '',
        "phone": '',
        "address": '',
        "unit": '',
        "zip": '',
        "city": '',
        "state": ''
    });
    useEffect(() => {
        checkForShoppingCart();
    }, []);
    return (
        <>  
            <h3 className="info-lbl">Shipping Information</h3>
            <ShippingInfo shippingInfo={shippingInfo} setShippingInfo={setShippingInfo}/>
            <div className="seperation-line"></div>
            <h3 className="info-lbl">Billing Information</h3>
            <BillingInfo shippingInfo={shippingInfo} setShippingInfo={setShippingInfo}/>
            <div className="seperation-line"></div>
        </>
    )
    
}

export default CheckoutInfo