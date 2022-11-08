import Meta from '../../components/global/meta'
import Script from 'next/script'
import ShippingInfo from '../../components/merch/checkout/shippingInfo'
import BillingInfo from '../../components/merch/checkout/billingInfo'
import Summary from '../../components/merch/checkout/summary'


export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/checkout.css"/>
        <Meta title={"Checkout"} description={""}/>
        <Script
            strategy="afterInteractive"
            type="module"
            src="/scripts/billing-info.js"
        />
        <script type="module" defer src="/scripts/billing-info.js"></script>
        <main>
            <div className='main-container'>
            <h1>Checkout</h1>
            <div className="seperation-line spcl"></div>
            <h3 className="info-lbl">Shipping Information</h3>
            <ShippingInfo/>
            <div className="seperation-line"></div>
            <h3 className="info-lbl">Billing Information</h3>
            <div className="same-as-shipping-container">
                <input className="same-as-shipping" id="same-as-shipping" type="checkbox"/>
                <label className="same-as-shipping-lbl" htmlFor="same-as-shipping">Same as shipping</label>
            </div>
            <BillingInfo/>
            <div className="seperation-line"></div>
            <Summary/>
            </div>
        </main>
    </>
  )
}
