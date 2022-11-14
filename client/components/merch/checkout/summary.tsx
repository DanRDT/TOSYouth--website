import setLocalCheckoutInfo from "../../hooks/setLocalCheckoutInfo"

const Summary = ({billingInfo, shippingInfo}) => {

    return (
        <>      
            <section className="summary">
                <h4 className="subtotal">Subtotal: <span>$99.98</span></h4>
                <h4 className="shipping">Shipping: <span className="rgt-item"> Free </span>
                </h4>
                <p>Estimated Delivery: 5-7 business days</p>
                <h4 className="tax">Tax: <span className="rgt-item">$6.07</span></h4>
                <h4 className="total">Total: <span className="rgt-item">$105.05</span></h4>
                <a className="pay-btn" onClick={() => setLocalCheckoutInfo(shippingInfo, billingInfo)}><h4>Proceed to Payment</h4></a>
            </section>
        </>
    )
    
}

export default Summary