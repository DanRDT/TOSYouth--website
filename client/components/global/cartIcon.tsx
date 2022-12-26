import Link from "next/link";
import { useEffect, useState } from "react";
import checkForShoppingCart from "../hooks/functions/checkForShoppingCart";
import getCart from "../hooks/functions/getCart";
import useCartEventListener from "../hooks/useCartEventListener";
import { useCart, useSetCart } from "../context/cartContext";

const Header = () => {
    const cart = useCart();
    const setCart = useSetCart();
    
    const [cartCount, setCartCount] = useState(4)
    const [emptyCartCss, setEmptyCartCss] = useState('empty')

    useEffect(() => {
        checkForShoppingCart();
        setCart(getCart());
    }, []);

    useCartEventListener(setCart) // cart changes in other tabs

    useEffect(() => {
        const count = cart.length;
        setCartCount(count)
        if (count > 0) {
            setEmptyCartCss('')
        } else {
            setEmptyCartCss('empty')
        }
    }, [cart]);

    return (
        <Link href="/merch/cart">
            <a className={`shopping-cart ${emptyCartCss} header-link`}>
                <svg viewBox="0 0 397 356" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M359.5 322C359.778 303.086 344.416 287.638 325.5 287.5C306.447 287.361 290.72 302.948 291 322C291.276 340.778 306.721 355.637 325.5 355.5C344.14 355.364 359.226 340.638 359.5 322Z" fill="black"/>
                    <path d="M213 322C213.278 303.086 197.916 287.638 179 287.5C159.947 287.361 144.22 302.948 144.5 322C144.776 340.778 160.221 355.637 179 355.5C197.64 355.364 212.726 340.638 213 322Z" fill="black"/>
                    <path d="M164 233L83.5 0.999908H18C8.5 1.99991 1 10.3971 1 20.4999C1 30.6027 8.5 38.9999 18 39.9999H56.5L137 272.5H368.5C379.5 271 385.628 262.75 385.5 252.5C385.374 242.398 379.5 234 368.5 233H164Z" fill="black"/>
                    <path id="empty-cart-icon" d="M352.696 197.918H196.696C190.696 197.918 187.196 191.918 184.696 185.418L148.196 79.4178C146.696 73.9178 149.196 68.9178 155.696 68.9178H390.196C394.696 68.9178 397.696 72.4178 395.696 79.4178L364.196 185.418C361.696 192.918 358.196 197.918 352.696 197.918Z" fill="black"/>
                    <path id="cart-has-items-icon" d="M352.696 197.918H196.696C190.696 197.918 187.196 191.918 184.696 185.418L148.196 79.4178C146.696 73.9178 149.196 68.9178 155.696 68.9178H176.5C179 68.9178 181.794 71.5 182.794 75L213.5 163.5H335L361.196 75C362.196 71.5 364.5 68.9178 368 68.9178H390.196C394.696 68.9178 397.696 72.4178 395.696 79.4178L364.196 185.418C361.696 192.918 358.196 197.918 352.696 197.918Z" fill="black"/>
                </svg>
                <p className="cart-count">{cartCount}</p>
            </a>
        </Link>
    )
    
}

export default Header