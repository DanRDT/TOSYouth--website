import Link from 'next/link'
import Meta from '../../components/global/meta'



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
                    <div className="cart-item-container">
                        <div className="cart-item">
                            <img className="cart-item-img" src="/imgs/sample-images/girl-in-hoodie.jpg"/>
                            <div className="cart-item-info">
                                <h3>Hoodie</h3>
                                <h4>$49.99</h4>
                                <h4>Size: M</h4>
                                <h4>Color: Grey</h4>
                                <h4 className="quantity">Quantity
                                    <div className="quantity-dropdown">
                                        <select name="" id="">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                        <div className="down-arrow"></div>
                                    </div>
                                    <p>Remove</p>
                                </h4>
                            </div>
                        </div>
                        <div className="seperation-line"></div>
                    </div>
                    <div className="cart-item-container">
                        <div className="cart-item">
                            <img className="cart-item-img" src="/imgs/sample-images/folded-hoodie.jpg"/>
                            <div className="cart-item-info">
                                <h3>Sweater</h3>
                                <h4>$49.99</h4>
                                <h4>Size: XXL</h4>
                                <h4>Color: Gray</h4>
                                <h4 className="quantity">Quantity
                                    <div className="quantity-dropdown">
                                        <select name="" id="">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                        <div className="down-arrow"></div>
                                    </div>
                                    <p>Remove</p>
                                </h4>
                            </div>
                        </div>
                        <div className="seperation-line"></div>
                    </div>
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
