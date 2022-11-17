import Meta from '../../components/global/meta'
import checkForCheckoutInfo from '../../components/hooks/functions/checkForCheckoutInfo'
import CheckoutInfo from '../../components/merch/checkout/checkoutInfo'
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
            <CheckoutInfo/>
            </div>
        </main>
    </>
  )
}
