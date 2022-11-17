import { useEffect, useRef, useState } from "react"
import checkForShoppingCart from "../../hooks/functions/checkForShoppingCart"
import getCart from "../../hooks/functions/getCart"
import setLocalCheckoutInfo from "../../hooks/functions/setLocalCheckoutInfo"
import useCartEventListener from "../../hooks/useCartEventListener"
import checkIfValid from "../../hooks/useCheckIfValid"

const Summary = ({shippingInfo, billingInfo, sameAsShipping, setCheckoutInfoValidCss}) => {
    const [infoValidPayBtnCss, setInfoValidPayBtnCss] = useState('')
    
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState('')
    const [tax, setTax] = useState('')
    const [total, setTotal] = useState('')

    useEffect(() => {
        checkForShoppingCart();
        setCart(getCart());
    }, []);

    useEffect(() => {
        let currentSubtotal = 0;
        cart.map((cartItem)=>{
            currentSubtotal = currentSubtotal + (Number(cartItem.price) * Number(cartItem.quantity))
        })
        setSubtotal("$" + currentSubtotal.toFixed(2))
        let tax = currentSubtotal * 0.07;
        setTax("$" + (tax).toFixed(2))
        setTotal("$" + (currentSubtotal+tax).toFixed(2))
    }, [cart]);
    useCartEventListener(setCart)

    function checkCheckoutInfo() {
        let checkoutInfoValid: number = 0;
        const shipping = ["name", "email", "address", "phone", "zip", "city", "state"]
        const billing = ["name", "email", "address", "phone", "zip", "city", "state"]

        shipping.map((key) => {
            checkoutInfoValid += checkIfValid(shippingInfo[key], key, "shipping", setCheckoutInfoValidCss)
        })
        if (sameAsShipping != 'same-as') {
            billing.map((key) => {
                checkoutInfoValid += checkIfValid(billingInfo[key], key, "billing", setCheckoutInfoValidCss)
            })
        }

        if (checkoutInfoValid == 0) {
            //add correct redirect to stripe soon
            window.location.assign('//stripe.com');
        } else {
            setInfoValidPayBtnCss("checkout-info-not-valid")
            setTimeout(() => {
                setInfoValidPayBtnCss('')
            }, 2200);
        }

    }

    
    return (
        <>      
            <section className="summary">
                <h4 className="subtotal">Subtotal: <span>{subtotal}</span></h4>
                <h4 className="shipping">Shipping: <span className="rgt-item"> Free </span>
                </h4>
                <p>Estimated Delivery: 5-7 business days</p>
                <h4 className="tax">Tax: <span className="rgt-item">{tax}</span></h4>
                <h4 className="total">Total: <span className="rgt-item">{total}</span></h4>
                <a className={`pay-btn ${infoValidPayBtnCss}`} 
                    onClick={() => {
                        setLocalCheckoutInfo(shippingInfo, billingInfo)
                        checkCheckoutInfo()
                    }}>
                    <h4>Proceed to Payment</h4>
                </a>
            </section>
        </>
    )
    
}

export default Summary