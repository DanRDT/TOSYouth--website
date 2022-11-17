import Meta from '../../components/global/meta'
import CartItems from '../../components/merch/cart/cart'


export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/cart.css"/>
        <Meta title={"Cart"} description={"View your shopping cart"}/>
        <main>
            <div className='main-container'>
            <section>
                <h1 >Cart</h1>
                <div className="separation-line special"></div>
                    <CartItems/>
            </section>
            </div>
        </main>
    </>
  )
}
