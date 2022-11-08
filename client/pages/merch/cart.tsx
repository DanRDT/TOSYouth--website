import Link from 'next/link'
import Meta from '../../components/global/meta'
import CartItems from '../../components/merch/cartItems'



export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/cart.css"/>
        <Meta title={"Cart"} description={"View your shopping cart"}/>
        <main>
            <div className='main-container'>
            <section>
                <h1 >Cart</h1>
                <div className="seperation-line spcl"></div>
                <div className="cart-items">
                    <CartItems/>
                </div>
                <div className="checkout">
                    <h4 className="subtotal">Subtotal: $99.98</h4>
                    <Link href="/merch/checkout">
                        <h4 className="checkout-btn">Checkout</h4>
                    </Link>
                </div>
            </section>
            </div>
        </main>
    </>
  )
}
