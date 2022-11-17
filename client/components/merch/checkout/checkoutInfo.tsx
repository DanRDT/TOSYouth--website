import Link from "next/link";
import { useEffect, useState } from "react"
import checkForCheckoutInfo from "../../hooks/functions/checkForCheckoutInfo";
import checkForShoppingCart from "../../hooks/functions/checkForShoppingCart";
import getCheckoutInfo from "../../hooks/functions/getCheckoutInfo";
import setLocalCheckoutInfo from "../../hooks/functions/setLocalCheckoutInfo";
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
    const [checkoutInfoValidCss, setCheckoutInfoValidCss] = useState({
        "shippingName": '',
        "shippingEmail": '',
        "shippingPhone": '',
        "shippingAddress": '',
        "shippingZip": '',
        "shippingCity": '',
        "shippingState": '',
        "billingName": '',
        "billingEmail": '',
        "billingPhone": '',
        "billingAddress": '',
        "billingZip": '',
        "billingCity": '',
        "billingState": ''
    });

    const updateLocalOnRedirect = (e) => {
        if (e.target.className != "nav-link") {
            return
        }
        setLocalCheckoutInfo(shippingInfo, billingInfo)
    }

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

    useEffect(() => {
        document.addEventListener("click", updateLocalOnRedirect);
        return () => document.removeEventListener("click", updateLocalOnRedirect)
    }, [billingInfo, shippingInfo]);

    return (
        <>  
            <div className='heading-container'>
              <h1>Checkout</h1>
              <Link href="/merch/cart"><a onClick={() => setLocalCheckoutInfo(shippingInfo, billingInfo)}>
                <img src="/imgs/arrow-down.svg" alt="" />
                <h4>Shopping Cart</h4>
              </a></Link>
            </div>
            <div className="separation-line full-length"></div>
            <h3 className="info-lbl">Shipping Information</h3>
            
            <ShippingInfo 
                shippingInfo={shippingInfo} setShippingInfo={setShippingInfo}
                setBillingInfo={setBillingInfo} sameAsShipping={sameAsShipping}
                checkoutInfoValidCss={checkoutInfoValidCss} setCheckoutInfoValidCss={setCheckoutInfoValidCss}/>

            <div className="separation-line"></div>
            <h3 className="info-lbl">Billing Information</h3>
            
            <BillingInfo 
                shippingInfo={shippingInfo}
                billingInfo={billingInfo} setBillingInfo={setBillingInfo}
                sameAsShipping={sameAsShipping} setSameAsShipping={setSameAsShipping}
                checkoutInfoValidCss={checkoutInfoValidCss} setCheckoutInfoValidCss={setCheckoutInfoValidCss}/>
            
            <div className="separation-line"></div>
            <Summary 
                shippingInfo={shippingInfo} billingInfo={billingInfo} 
                sameAsShipping={sameAsShipping} setCheckoutInfoValidCss={setCheckoutInfoValidCss}/>
        </>
    )
    
}

export default CheckoutInfo