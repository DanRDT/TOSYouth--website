import { useEffect } from 'react'
import Meta from '../../components/global/meta'
import checkForCheckoutInfo from '../../components/hooks/functions/checkForCheckoutInfo'

// read the readme.md file in '/components/tempSolution' for more info
// import CheckoutInfo from '../../components/merch/checkout/checkoutInfo'
import CheckoutInfo from '../../components/tempSolution/checkout/checkoutInfo'


export default function Home() {
  
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
