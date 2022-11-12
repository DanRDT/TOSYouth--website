import Link from "next/link";
import { useEffect, useState } from "react"
import checkForShoppingCart from "../../functions/checkForShoppingCart";
import getCart from "../../functions/getCart";
import useCartEventListener from "../../hooks/useCartEventListener";
import Quantity from "./quantity";

const CartItems = ({item, cart, setCart}) => {

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

    return (
        <>      
            <p onClick={() => {removeItem(item.id,item.size)}}>Remove</p> 
        </>
    )
}

export default CartItems



