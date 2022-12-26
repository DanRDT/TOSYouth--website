import Link from "next/link";
import { useEffect, useState } from "react"
import checkForCheckoutInfo from "../functions/checkForCheckoutInfo";
import getCheckoutInfo from "../functions/getCheckoutInfo";
import setLocalCheckoutInfo from "../functions/setLocalCheckoutInfo";
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
    
    const [checkoutInfoValidCss, setCheckoutInfoValidCss] = useState({
        "shippingName": '',
        "shippingEmail": '',
        "shippingPhone": '',
        "shippingAddress": '',
        "shippingZip": '',
        "shippingCity": '',
        "shippingState": ''
    });

    const updateLocalOnRedirect = (e) => {
        // set local storage if user navigates to another page
        if (e.target.className != "nav-link") {
            return
        }
        setLocalCheckoutInfo(shippingInfo)
    }

    useEffect(() => {
        checkForCheckoutInfo();
        // set checkout info to saved info
        const shippingLocal = getCheckoutInfo("shipping");
        setShippingInfo(shippingLocal)
    }, []);

    useEffect(() => {
        //listen for redirects
        document.addEventListener("click", updateLocalOnRedirect);
        return () => document.removeEventListener("click", updateLocalOnRedirect)
    }, [shippingInfo]);

    return (
        <>  
            <div className='heading-container'>
              <h1>Checkout</h1>
              <Link href="/merch/cart"><a onClick={() => setLocalCheckoutInfo(shippingInfo)}>
                <img src="/imgs/arrow-down.svg" alt="" />
                <h4>Shopping Cart</h4>
              </a></Link>
            </div>
            <div className="separation-line full-length"></div>
            <h3 className="info-lbl">Shipping Information</h3>
            
            <ShippingInfo 
                shippingInfo={shippingInfo} setShippingInfo={setShippingInfo}
                checkoutInfoValidCss={checkoutInfoValidCss} setCheckoutInfoValidCss={setCheckoutInfoValidCss}/>

            <div className="separation-line"></div>
            <Summary 
                shippingInfo={shippingInfo} setCheckoutInfoValidCss={setCheckoutInfoValidCss}/>
        </>
    )
    
}

export default CheckoutInfo