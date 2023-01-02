import { useEffect, useRef, useState } from "react"
import checkForShoppingCart from "../../hooks/functions/checkForShoppingCart"
import getCart from "../../hooks/functions/getCart"
import setLocalCheckoutInfo from "../functions/setLocalCheckoutInfo"
import checkIfValid from "../functions/useCheckIfValid"

const Summary = ({shippingInfo, setCheckoutInfoValidCss}) => {
    const [infoValidPayBtnCss, setInfoValidPayBtnCss] = useState('')
    
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState('')
    const [tax, setTax] = useState('')
    const [total, setTotal] = useState('')
    const [placeOrderLoading, setPlaceOrderLoading] = useState('');

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
        setSubtotal(currentSubtotal.toFixed(2))
        let tax = currentSubtotal * 0.07;
        setTax((tax).toFixed(2))
        setTotal((currentSubtotal+tax).toFixed(2))
    }, [cart]);

    function checkCheckoutInfo() {
        //check if fields are valid
        let checkoutInfoValid: number = 0;
        
        const shipping = ["firstName", "lastName", "email", "phone"]
        
        //loop thru each value, if invalid add 1
        shipping.map((key) => {
            checkoutInfoValid += checkIfValid(shippingInfo[key], key, "shipping", setCheckoutInfoValidCss)
        })

        //if fields are valid then redirect 
        if (checkoutInfoValid == 0) {
            //add correct redirect to stripe 
            //use api to check input validity in backend
            // window.location.assign('//stripe.com');

            setPlaceOrderLoading('active-loading')

            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/create-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": `${crypto.randomUUID()}`,
                    "items": cart,
                    "totals": {
                        "total": subtotal
                    },
                    "customer_info": {
                        "first_name": shippingInfo.firstName,
                        "last_name": shippingInfo.lastName,
                        "email": shippingInfo.email,
                        "phone": shippingInfo.phone
                    }
                })
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.statusText} ~ Network code: ${res.status} \n ${res.body}`);
                }
                return res.json();
            })
            .then((res)=>{
                if (res.status == "success") {
                    localStorage.setItem("ShoppingCart", "[]")
                    window.location.assign(`${process.env.NEXT_PUBLIC_BASE_URL}/merch/checkout/confirmed`);
                } else {
                    window.location.assign(`${process.env.NEXT_PUBLIC_BASE_URL}/merch/checkout/denied`);
                }
                
            })
            .catch((error) => {
                console.error('There has been a problem with the server request ~', error);
                window.location.assign(`${process.env.NEXT_PUBLIC_BASE_URL}/merch/checkout/denied`);
            })


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
                <h4 className="subtotal">Subtotal: <span>${subtotal}</span></h4>
                <h4 className="shipping">Shipping: <span className="rgt-item"> Free </span>
                </h4>
                <p>Estimated Delivery: 5-7 business days</p>
                {/* <h4 className="tax">Tax: <span className="rgt-item">${tax}</span></h4> */}
                <h4 className="total">Total: <span className="rgt-item">${subtotal}</span></h4>
                <a className={`pay-btn ${infoValidPayBtnCss} ${placeOrderLoading}`} 
                    onClick={() => {
                        setLocalCheckoutInfo(shippingInfo)
                        checkCheckoutInfo() 
                    }}>
                    <h4>Place Order</h4>
                    <div className={`loading-animation ${placeOrderLoading}`}></div>
                </a>
            </section>
        </>
    )
    
}

export default Summary