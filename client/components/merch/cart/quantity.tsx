import { useEffect, useState } from "react"

const CartItems = ({index, item, cart, setCart}) => {

    const changeQuantity = (selectedQuantity) => {
        const newCart = [...cart];
        newCart[index] = {...item, "quantity": selectedQuantity}
        
        setCart(newCart);
        localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
        
    }

    return (
        <>      
            <div className="quantity-dropdown">
                <select 
                value={item.quantity}
                onChange={(e) => {
                    changeQuantity(e.target.value)
                }}>
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
        </>
    )
}

export default CartItems



