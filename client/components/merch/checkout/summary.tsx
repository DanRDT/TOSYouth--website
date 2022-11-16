import { useEffect, useRef, useState } from "react"
import checkForShoppingCart from "../../hooks/checkForShoppingCart"
import getCart from "../../hooks/getCart"
import setLocalCheckoutInfo from "../../hooks/setLocalCheckoutInfo"
import useCartEventListener from "../../hooks/useCartEventListener"

const Summary = ({billingInfo, shippingInfo}) => {
    const [checkoutInfoValid, setCheckoutInfoValid] = useState(true)
    const [checkoutInfoValidCss, setCheckoutInfoValidCss] = useState('')
    
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

    function infoNotValid() {
        setCheckoutInfoValidCss("checkout-info-not-valid")
        setTimeout(() => {
            setCheckoutInfoValidCss('')
        }, 2200);
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
                { checkoutInfoValid ? 
                    (<a className="pay-btn" 
                        onClick={() => {
                            setLocalCheckoutInfo(shippingInfo, billingInfo)
                        }}>
                        <h4>Proceed to Payment</h4>
                    </a>)
                :
                    (<a className={`pay-btn ${checkoutInfoValidCss}`} 
                        onClick={() => {
                            setLocalCheckoutInfo(shippingInfo, billingInfo)
                            infoNotValid()
                        }}>
                        <h4>Proceed to Payment</h4>
                    </a>)
                }
            </section>
        </>
    )
    
}

export default Summary