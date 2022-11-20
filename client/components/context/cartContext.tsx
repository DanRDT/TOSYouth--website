import { createContext } from "react";
import { useState, useContext } from "react";

const CartContext = createContext(null)
const CartContextUpdate = createContext(null)

export function useCart() {
    return useContext(CartContext)
}
export function useSetCart() {
    return useContext(CartContextUpdate)
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={cart}>
            <CartContextUpdate.Provider value={setCart}>
                {children}
            </CartContextUpdate.Provider>
        </CartContext.Provider>
    )
}