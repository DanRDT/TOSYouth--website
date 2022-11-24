import Link from "next/link";
import Quantity from "./quantity";
import Remove from "./remove";
import Subtotal from "./subtotal";
import { useCart, useSetCart } from "../../context/cartContext";


const CartItems = () => {
    
    const cart = useCart();
    const setCart = useSetCart();

    function displayCart() {
        
        //check if cart is empty
        if (typeof cart != "undefined" && cart != null && cart.length != null
        && cart.length > 0) {
            return cart.map((item, index) => (
                <div key={"cartItem"+index} className="cart-item-container">
                <div className="cart-item">
                    <Link href={`/merch/items/${item.id}`}><a><img className="cart-item-img" src={item.image}/></a></Link>
                    <div className="cart-item-info">
                        <Link href={`/merch/items/${item.id}`}><a><h3>{item.name}</h3></a></Link>
                        <h4>${item.price}</h4>
                        <h4>Size: {item.size}</h4>
                        <h4>Color: {item.color}</h4>
                        <h4 className="quantity">Quantity
                            <Quantity index={index} item={item} cart={cart} setCart={setCart}/>
                            <Remove item={item} cart={cart} setCart={setCart}/>
                        </h4>
                    </div>
                </div>
                <div className="separation-line"></div>
            </div>
            ))
        } else {
            return (
                <div key={"emptyCart"} className="cart-item-container">
                <div className="cart-item">
                    <div className="cart-item-info">
                        <h3 style={{margin: "2rem 0"}}>Shopping Cart is empty</h3>
                    </div>
                </div>
            </div>
            )
        }    
    }
    
    
    return (
        <> 
        <div className="cart-items">
        {
            displayCart()
        }    
        </div>
        <Subtotal cart={cart}/>
        </>
    )
}

export default CartItems



