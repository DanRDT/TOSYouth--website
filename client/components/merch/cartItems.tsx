import Link from "next/link";
import { useEffect, useState } from "react"
import checkForShoppingCart from "../functions/checkForShoppingCart";
import getCart from "../functions/getCart";
import useCartEventListener from "../hooks/useCartEventListener";

const CartItems = () => {
    const [items, setItems] = useState([]);

    const removeItem = (id) => {
        const newCart = [];
        items.map((item) => {
            if (item.id != id) {
                newCart.push(item)
            }
        })
        setItems(newCart);
        localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
    }

    useEffect(() => {
        checkForShoppingCart();
        setItems(getCart());
        console.log("page mount");
    }, []);
    
    useCartEventListener(setItems)
    
    function displayCart() {
        if (typeof items != "undefined" && items != null && items.length != null
        && items.length > 0) {
            return items.map((item, index) => (
                <div key={"cartitem"+index} className="cart-item-container">
                <div className="cart-item">
                    <img className="cart-item-img" src="/imgs/sample-images/girl-in-hoodie.jpg"/>
                    <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <h4>${item.price}</h4>
                        <h4>Size: {item.size}</h4>
                        <h4>Color: {item.color}</h4>
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
                            <p onClick={() => {removeItem(item.id)}}>Remove</p>
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



