import Link from "next/link";
import { useEffect, useState } from "react"

const CartItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getItems() {
            const res = await fetch("/api/merch/items")
            setItems(await res.json());
        }
        getItems();
    }, []);
    
    return (
        <>      
        {items.map((item, index) => (
            <div key={index} className="cart-item-container">
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
        ))}
        
        </>
    )
    
}

export default CartItems