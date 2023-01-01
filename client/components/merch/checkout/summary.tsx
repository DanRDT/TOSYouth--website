import { useEffect, useRef, useState } from "react"
import checkForShoppingCart from "../../hooks/functions/checkForShoppingCart"
import getCart from "../../hooks/functions/getCart"
import setLocalCheckoutInfo from "../../hooks/functions/setLocalCheckoutInfo"
import CartEventListener from "../../hooks/CartEventListener"
import checkIfValid from "../../hooks/CheckIfValid"

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
        // calculate totals
        let currentSubtotal = 0;
        cart.map((cartItem)=>{
            currentSubtotal = currentSubtotal + (Number(cartItem.price) * Number(cartItem.quantity))
        })
        setSubtotal("$" + currentSubtotal.toFixed(2))
        let tax = currentSubtotal * 0.07;
        setTax("$" + (tax).toFixed(2))
        setTotal("$" + (currentSubtotal+tax).toFixed(2))
    }, [cart]);

    // useCartEventListener(setCart) //listen for cart changes in other tabs

    function checkCheckoutInfo() {
        //check if fields are valid
        let checkoutInfoValid: number = 0;
        
        const shipping = ["name", "email", "address", "phone", "zip", "city", "state"]
        const billing = ["name", "email", "address", "phone", "zip", "city", "state"]
        
        //loop thru each value, if invalid add 1
        shipping.map((key) => {
            checkoutInfoValid += checkIfValid(shippingInfo[key], key, "shipping", setCheckoutInfoValidCss)
        })
        if (sameAsShipping != 'same-as') {
            billing.map((key) => {
                checkoutInfoValid += checkIfValid(billingInfo[key], key, "billing", setCheckoutInfoValidCss)
            })
        }

        //if fields are valid redirect to stripe
        if (checkoutInfoValid == 0) {
            //add correct redirect to stripe 
            //use api to check input validity in backend
            window.location.assign('//stripe.com');
        } else {
            // add not valid css class
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