import Link from "next/link";
import { useEffect, useState } from "react"
import checkForShoppingCart from "../../functions/checkForShoppingCart";

const ShippingInfo = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        checkForShoppingCart();
    }, []);
    
    return (
        <>      
            <section className="summary">
                <h4 className="subtotal">Subtotal: <span>$99.98</span></h4>
                <h4 className="shipping">Shipping: <span className="rgt-item"> Free </span>
                </h4>
                <p>Estimated Delivery: 5-7 business days</p>
                <h4 className="tax">Tax: <span className="rgt-item">$6.07</span></h4>
                <h4 className="total">Total: <span className="rgt-item">$105.05</span></h4>
                <h4 className="pay-btn">Proceed to Payment</h4>
            </section>
        </>
    )
    
}

export default ShippingInfo