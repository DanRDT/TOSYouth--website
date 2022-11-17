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
              <h2>Order was placed</h2>
            </div>
        </main>
    </>
  )
}
