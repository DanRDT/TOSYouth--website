import Link from 'next/link'
import Meta from '../../components/global/meta'
import Scripts from '../../components/global/scripts'
import LatestItems from '../../components/merch/latestItems'



export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/checkout.css"/>
        <Meta title={"Checkout"} description={""}/>
        <Scripts/>
        <script type="module" defer src="/scripts/billing-info.js"></script>
        <main>
            <div className='main-container'>
            <h1>Checkout</h1>
            <div className="seperation-line spcl"></div>
            <h3 className="info-lbl">Shipping Information</h3>
            <section className="shipping-info">
                <h4>Name
                <input className="info-input" type="text" name="name" placeholder="..." required/></h4>
                <h4>Email
                <input className="info-input" type="text" name="email" placeholder="..." required/></h4>
                <h4>Street Address
                <input className="info-input" type="text" name="address" placeholder="..." required/></h4>
                <h4>Phone
                <input className="info-input" type="text" name="phone" placeholder="..." required/></h4>
                <h4>Apartment / Unit / Suite
                <input className="info-input" type="text" name="unit" placeholder="..." required/></h4>
                <h4>Zip Code
                <input className="info-input" type="text" name="zip" placeholder="..." required/></h4>
                <h4>City
                <input className="info-input" type="text" name="city" placeholder="..." required/></h4>
                <h4>State
                <input className="info-input" type="text" name="state" placeholder="..." required/></h4>
            </section>
            <div className="seperation-line"></div>
            <h3 className="info-lbl">Billing Information</h3>
            <div className="same-as-shipping-container">
                <input className="same-as-shipping" id="same-as-shipping" type="checkbox"/>
                <label className="same-as-shipping-lbl" htmlFor="same-as-shipping">Same as shipping</label>
            </div>
            <section className="billing-info">
                <h4>Name
                <input className="info-input" type="text" name="name" placeholder="..." required/></h4>
                <h4>Email
                <input className="info-input" type="text" name="email" placeholder="..." required/></h4>
                <h4>Street Address
                <input className="info-input" type="text" name="address" placeholder="..." required/></h4>
                <h4>Phone
                <input className="info-input" type="text" name="phone" placeholder="..." required/></h4>
                <h4>Apartment / Unit / Suite
                <input className="info-input" type="text" name="unit" placeholder="..." required/></h4>
                <h4>Zip Code
                <input className="info-input" type="text" name="zip" placeholder="..." required/></h4>
                <h4>City
                <input className="info-input" type="text" name="city" placeholder="..." required/></h4>
                <h4>State
                <input className="info-input" type="text" name="state" placeholder="..." required/></h4>
            </section>
            <div className="seperation-line"></div>
            
            <section className="summary">
                <h4 className="subtotal">Subtotal: <span>$99.98</span></h4>
                <h4 className="shipping">Shipping: <span className="rgt-item"> Free </span>
                </h4>
                <p>Estimated Delivery: 5-7 business days</p>
                <h4 className="tax">Tax: <span className="rgt-item">$6.07</span></h4>
                <h4 className="total">Total: <span className="rgt-item">$105.05</span></h4>
                <h4 className="pay-btn">Proceed to Payment</h4>
            </section>
            </div>
        </main>
    </>
  )
}
