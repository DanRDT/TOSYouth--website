import { useEffect } from "react";
import getCart from "./functions/getCart";

export default function CartEventListener(setCart) {
    useEffect(() => {
        // update cart if it changes in another tab
        const storageEventHandler = (event) => {
            if (event.key === "ShoppingCart") {
                setCart(getCart());
            }
        }
        window.addEventListener("storage", storageEventHandler);
        return () => {
            window.removeEventListener("storage", storageEventHandler);
        };
    }, []);
}