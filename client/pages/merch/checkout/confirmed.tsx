import { useEffect, useState } from 'react'
import Meta from '../../../components/global/meta';

export default function Home() {
  const [purchasedItems, setPurchasedItems] = useState()

  useEffect(() => {
  }, []);
  
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/cart.css"/>
        <Meta title={"Order Placed"} description={""}/>
        <main>
            <div className='main-container'>
              <h1>Confirmed</h1>
              <div className="separation-line special"></div>
              <h2 style={{paddingTop: "2rem"}}>Order was placed</h2>
              <h4 style={{paddingTop: "2rem"}}>Check your email to view your order</h4>
              {/* <h2 style={{paddingTop: "2rem"}}></h2> */}
            </div>
        </main>
    </>
  )
}
