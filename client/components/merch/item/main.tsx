import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import checkForShoppingCart from "../../functions/checkForShoppingCart";
import getCart from "../../functions/getCart";
import Meta from "../../global/meta";
import useCartEventListener from "../../hooks/useCartEventListener";
import Colors from "./colors";
import Images from "./images";
import Quantity from "./quantity";
import Sizes from "./sizes";

const Item = (id) => {
    const router = useRouter();
    
    const [cart, setCart] = useState([]);

    const [item, setItem] = useState({
        "id":"",
        "name":"",
        "description":"",
        "price":"",
        "images":[""],
        "type":"",
        "gender":"",
        // "colors":[""],
        "sizes":[""]
    });
    const [selectedItem, setSelectedItem] = useState({
        "id": "",
        "name": "",
        "price": "",
        // "color": "",
        "size": "",
        "quantity": ""
    });
    
    const addItem = () => {
        const newCart = cart.map(e => e);

        let exists = false;
        newCart.map((cartItem, i) => {
            if (cartItem.id == selectedItem.id) {
                newCart[i] = {
                    "id": selectedItem.id,
                    "name": selectedItem.name,
                    "price": selectedItem.price,
                    // "color": selectedItem.color,
                    "size": selectedItem.size,
                    "quantity": (Number(cartItem.quantity) + Number(selectedItem.quantity)) + ''
                }
                exists = true;
            }
        })
        if (!exists) {
            newCart.push({
                "id": item.id,
                "name": item.name,
                "price": item.price,
                // "color": "Rainbow",
                "size": "S",
                "quantity": Number(selectedItem.quantity) + ''
            })
        }
        
        setCart(newCart);
        localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
    }

    useEffect(() => {
        checkForShoppingCart();
        setCart(getCart());
    }, []);
    useCartEventListener(setCart)
    
    useEffect(() => {
        if(!router.isReady) return;
        async function getItem() {            
            const res = await fetch(`/api/merch/${id.id}`)
            setItem(await res.json());
        }
        getItem();
    }, [router.isReady]);
    
    useEffect(() => {
        setSelectedItem({
            ...selectedItem,
            "id": item.id,
            "name": item.name,
            "price": item.price,
            // "color": "",
            // "size": "",
            "quantity": "1"
        })
    }, [item]);
    
    return (
        <>      
            <section>
                <Meta title={item.name} description={item.description} />
                <Link href="/merch/items"><a className="back-arrow"><img src="/imgs/arrow-down.svg" alt="Return"/></a></Link>
                <Images id={item}/>
                <div className="item-info">
                    <h3 className="title">{item.name}</h3>
                    <h4 className="price">{`$${item.price}`}</h4>
                    <h4 className="description">{item.description}</h4>
                    {/* <h4 className="color-lbl">Color</h4> */}
                    {/* <Colors id={item}/> */}
                    <h4 className="size-lbl">Size</h4>
                    <Sizes item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                    <h4 className="quantity-lbl">Quantity</h4>
                    <Quantity selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                    <h4 className="add-to-cart-btn" onClick={addItem}>Add to Cart</h4>
                    <div className="plchlder"></div>
                </div>
            </section>
        </>
    )
    
}

export default Item