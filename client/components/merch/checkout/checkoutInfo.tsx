import Link from "next/link";
import { useEffect, useState } from "react"
import checkForCheckoutInfo from "../../hooks/checkForCheckoutInfo";
import checkForShoppingCart from "../../hooks/checkForShoppingCart";
import getCheckoutInfo from "../../hooks/getCheckoutInfo";
import setLocalCheckoutInfo from "../../hooks/setLocalCheckoutInfo";
import BillingInfo from "./billingInfo"
import ShippingInfo from "./shippingInfo"
import Summary from "./summary";

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
    const [sameAsShipping, setSameAsShipping] = useState('same-as')
    const [billingInfo, setBillingInfo] = useState({
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
        checkForCheckoutInfo();
        const shippingLocal = getCheckoutInfo("shipping");
        const billingLocal = getCheckoutInfo("billing");
        if (JSON.stringify(shippingLocal) != JSON.stringify(billingLocal)) {
            setSameAsShipping('')
        }
        setShippingInfo(shippingLocal)
        setBillingInfo(billingLocal)
    }, []);

    return (
        <>  
            <div className='heading-container'>
              <h1>Checkout</h1>
              <Link href="/merch/cart"><a onClick={() => setLocalCheckoutInfo(shippingInfo, billingInfo)}>
                <img src="/imgs/arrow-down.svg" alt="" />
                <h4>Shopping Cart</h4>
              </a></Link>
            </div>
            <div className="seperation-line spcl"></div>
            <h3 className="info-lbl">Shipping Information</h3>
            
            <ShippingInfo 
                shippingInfo={shippingInfo} setShippingInfo={setShippingInfo}
                setBillingInfo={setBillingInfo} sameAsShipping={sameAsShipping}/>

            <div className="seperation-line"></div>
            <h3 className="info-lbl">Billing Information</h3>
            
            <BillingInfo 
                shippingInfo={shippingInfo}
                billingInfo={billingInfo} setBillingInfo={setBillingInfo}
                sameAsShipping={sameAsShipping} setSameAsShipping={setSameAsShipping}/>
            
            <div className="seperation-line"></div>
            <Summary shippingInfo={shippingInfo} billingInfo={billingInfo}/>
        </>
    )
    
}

export default CheckoutInfo