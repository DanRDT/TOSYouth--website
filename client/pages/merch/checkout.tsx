import Meta from '../../components/global/meta'
import ShippingInfo from '../../components/merch/checkout/shippingInfo'
import BillingInfo from '../../components/merch/checkout/billingInfo'
import Summary from '../../components/merch/checkout/summary'
import checkForCheckoutInfo from '../../components/functions/checkForCheckoutInfo'
import CheckoutInfo from '../../components/merch/checkout/checkoutInfo'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    checkForCheckoutInfo();
  }, []);
  
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/checkout.css"/>
        <Meta title={"Checkout"} description={""}/>
        <main>
            <div className='main-container'>
            <div className='heading-container'>
              <h1>Checkout</h1>
              <Link href="/merch/cart"><a>
                <img src="/imgs/arrow-down.svg" alt="" />
                <h4>Shopping Cart</h4>
              </a></Link>
            </div>
            <div className="seperation-line spcl"></div>
            <CheckoutInfo/>
            <Summary/>
            </div>
        </main>
    </>
  )
}
