import Link from "next/link";
import { useEffect, useState } from "react"
import checkForShoppingCart from "../functions/checkForShoppingCart";
import getCart from "../functions/getCart";
import useCartEventListener from "../hooks/useCartEventListener";

const CartItems = () => {
    const [cart, setCart] = useState([]);

    const removeItem = (id,size) => {
        const newCart = [];
        cart.map((item) => {
            if (item.id != id || item.size != size) {
                newCart.push(item)
            }
        })
        setCart(newCart);
        localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
    }

    useEffect(() => {
        checkForShoppingCart();
        setCart(getCart());
    }, []);
    
    useCartEventListener(setCart)
    
    function displayCart() {
        if (typeof cart != "undefined" && cart != null && cart.length != null
        && cart.length > 0) {
            return cart.map((item, index) => (
                // <Link href={`/merch/items/${item.id}`}></Link>
                <div key={"cartitem"+index} className="cart-item-container">
                <div className="cart-item">
                    <Link href={`/merch/items/${item.id}`}><a><img className="cart-item-img" src="/imgs/sample-images/girl-in-hoodie.jpg"/></a></Link>
                    <div className="cart-item-info">
                        <Link href={`/merch/items/${item.id}`}><a><h3>{item.name}</h3></a></Link>
                        <h4>${item.price}</h4>
                        <h4>Size: {item.size}</h4>
                        {/* <h4>Color: {item.color}</h4> */}
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
                            <p onClick={() => {removeItem(item.id,item.size)}}>Remove</p>
                        </h4>
                    </div>
                </div>
                <div className="seperation-line"></div>
            </div>
            ))
        } else {
            return (
                <div key={"emptycart"} className="cart-item-container">
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
        {
            displayCart()
        }    
        </>
    )
}

export default CartItems



