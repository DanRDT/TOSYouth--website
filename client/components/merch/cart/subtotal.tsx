import Link from "next/link";
import { useEffect, useState } from "react"

const Subtotal = ({cart}) => {
    const [cartLength, setCartLength] = useState(0);
    const [subtotal, setSubtotal] = useState("");
    const [emptyCart, setEmptyCart] = useState("");

    useEffect(() => {
        setCartLength(cart.length)

        let currentSubtotal :any = 0;
        cart.map((cartItem)=>{
            currentSubtotal = currentSubtotal + (Number(cartItem.price) * Number(cartItem.quantity))
        })
        setSubtotal("Subtotal: $" + currentSubtotal.toFixed(2))
    }, [cart]);
    
    function cartEmpty() {
        setEmptyCart("empty-cart")
        setTimeout(() => {
            setEmptyCart("")
        }, 1500);
    }
       
    return (
        <>      
        <div className="checkout">
            <h4 className="subtotal">{subtotal}</h4>
            { cartLength > 0 ? 
                (<Link href="/merch/checkout">
                    <h4 className="checkout-btn">Checkout</h4>
                </Link>)
            :(
                <h4 onClick={() => cartEmpty()} className={`checkout-btn ${emptyCart}`}>Checkout</h4>
            )}
            
        </div> 
        </>
    )
}

export default Subtotal





