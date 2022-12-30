import Link from "next/link";
import { useEffect, useState } from "react"
import checkForCheckoutInfo from "../functions/checkForCheckoutInfo";
import getCheckoutInfo from "../functions/getCheckoutInfo";
import setLocalCheckoutInfo from "../functions/setLocalCheckoutInfo";
import ShippingInfo from "./shippingInfo"
import Summary from "./summary";

const CheckoutInfo = () => {
    const [shippingInfo, setShippingInfo] = useState({
        "first_name": '',
        "last_name": '',
        "email": '',
        "phone": ''
    });
    
    const [checkoutInfoValidCss, setCheckoutInfoValidCss] = useState({
        "shippingFirstName": '',
        "shippingLastName": '',
        "shippingEmail": '',
        "shippingPhone": ''
    });

    const updateLocalOnRedirect = (e) => {
        // set local storage if user navigates to another page
        const regEx = /nav-link/
        if (!regEx.test(e.target.className)) {
            return
        }
        setLocalCheckoutInfo(shippingInfo)
    }

    useEffect(() => {
        checkForCheckoutInfo()
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
            <h3 className="info-lbl">Customer Details</h3>
            
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