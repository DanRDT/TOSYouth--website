import { useEffect, useRef, useState } from "react"
import checkForShoppingCart from "../../hooks/checkForShoppingCart"
import getCart from "../../hooks/getCart"
import setLocalCheckoutInfo from "../../hooks/setLocalCheckoutInfo"
import useCartEventListener from "../../hooks/useCartEventListener"

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

    function addRequiredPopup(key) {
        setCheckoutInfoValidCss(prev => {
            const tempObject = {...prev, [key]: "required"}
            return tempObject
        })
        setTimeout(() => {
            setCheckoutInfoValidCss(prev => {
                const tempObject = {...prev, [key]: ""}
                return tempObject
            })
        }, 8000);
    }

    function checkCheckoutInfo() {
        let checkoutInfoValid = true;
        const regExNormal = /[A-Za-z]+/
        const regExPhone = /^\d{3}-\d{3}-\d{4}$/
        const regExZip = /^\d{5}/
        const regExEmail = /[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

        if (!regExNormal.test(shippingInfo.name)) {
            checkoutInfoValid = false
            addRequiredPopup("shippingName")
        }
        if (!regExEmail.test(shippingInfo.email)) {
            checkoutInfoValid = false
            addRequiredPopup("shippingEmail")
        }
        if (!regExNormal.test(shippingInfo.address)) {
            checkoutInfoValid = false
            addRequiredPopup("shippingAddress")
        }
        if (!regExPhone.test(shippingInfo.phone)) {
            checkoutInfoValid = false
            addRequiredPopup("shippingPhone")
        }
        if (!regExZip.test(shippingInfo.zip)) {
            checkoutInfoValid = false
            addRequiredPopup("shippingZip")
        }
        if (!regExNormal.test(shippingInfo.city)) {
            checkoutInfoValid = false
            addRequiredPopup("shippingCity")
        }
        if (!regExNormal.test(shippingInfo.state)) {
            checkoutInfoValid = false
            addRequiredPopup("shippingState")
        }
        if (sameAsShipping != "same-as") {
            if (!regExNormal.test(billingInfo.name)) {
                checkoutInfoValid = false
                addRequiredPopup("billingName")
            }
            if (!regExEmail.test(billingInfo.email)) {
                checkoutInfoValid = false
                addRequiredPopup("billingEmail")
            }
            if (!regExNormal.test(billingInfo.address)) {
                checkoutInfoValid = false
                addRequiredPopup("billingAddress")
            }
            if (!regExPhone.test(billingInfo.phone)) {
                checkoutInfoValid = false
                addRequiredPopup("billingPhone")
            }
            if (!regExZip.test(billingInfo.zip)) {
                checkoutInfoValid = false
                addRequiredPopup("billingZip")
            }
            if (!regExNormal.test(billingInfo.city)) {
                checkoutInfoValid = false
                addRequiredPopup("billingCity")
            }
            if (!regExNormal.test(billingInfo.state)) {
                checkoutInfoValid = false
                addRequiredPopup("billingState")
            }
        }
        
        if ((checkoutInfoValid)) {
            //redirect to stripe
            window.location.assign('//stripe.com');
        } else {
            setInfoValidPayBtnCss("checkout-info-not-valid")
            setTimeout(() => {
                setInfoValidPayBtnCss('')
            }, 2200);
        }

    }

    

    function infoNotValid() {
        setTimeout(() => {
            setInfoValidPayBtnCss('')
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