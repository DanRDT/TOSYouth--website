import { useEffect } from "react";
import getCart from "../functions/getCart";

export default function useCartEventListener(setItems) {
    useEffect(() => {
        // update cart if it changes in another tab
        function storageEventHandler(event) {
            if (event.key === "ShoppingCart") {
                setItems(getCart());
                console.log("cart changed");
            }
        }
        window.addEventListener("storage", storageEventHandler);
        return () => {
            window.removeEventListener("storage", storageEventHandler);
        };
    }, []);
}