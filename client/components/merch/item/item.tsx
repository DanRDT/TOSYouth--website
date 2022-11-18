import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import checkForShoppingCart from "../../hooks/functions/checkForShoppingCart";
import getCart from "../../hooks/functions/getCart";
import Meta from "../../global/meta";
import useCartEventListener from "../../hooks/useCartEventListener";
import Colors from "./colors";
import Images from "./images";
import Quantity from "./quantity";
import Sizes from "./sizes";

const Item = ({item}) => {
    const [cart, setCart] = useState([]);
    const [added, setAdded] = useState("Add to Cart");
    const [cartLoading, setCartLoading] = useState("");
    const [pickSize, setPickSize] = useState("");

    const [selectedItem, setSelectedItem] = useState({
        "id": "",
        "name": "",
        "price": "",
        "image": "",
        // "color": "",
        "size": "",
        "quantity": "1"
    });
    
    const addItem = () => {
        // check if size was selected
        if (selectedItem.size == "") {
            setPickSize("pick-size")
            setTimeout(() => {
                setPickSize("")
            }, 2500);
            return
        }

        // add css class
        setCartLoading("active-loading")

        const newCart = cart.map(e => e);
        let itemExists = false;
        newCart.map((cartItem, i) => {
            // update cart item if exists
            if (cartItem.id == selectedItem.id && cartItem.size == selectedItem.size) { // check id and size
                // max quantity
                let quantity = (Number(cartItem.quantity) + Number(selectedItem.quantity)) + ''
                if (Number(quantity) > 10) { 
                    quantity = '10'
                }
                
                //update at index
                newCart[i] = {
                    "id": selectedItem.id,
                    "name": selectedItem.name,
                    "price": selectedItem.price,
                    "image": selectedItem.image,
                    // "color": selectedItem.color,
                    "size": selectedItem.size,
                    "quantity": quantity
                }
                itemExists = true;
            }
        })

        // create new cart item if doesn't exist
        if (!itemExists) {
            newCart.push({
                "id": item.id,
                "name": item.name,
                "price": item.price,
                "image": selectedItem.image,
                // "color": "Rainbow",
                "size": selectedItem.size,
                "quantity": Number(selectedItem.quantity) + ''
            })
        }

        // reset quantity
        setSelectedItem(prevItem => {
            return {...prevItem, "quantity": "1"}
        })

        // add item to state and localStorage
        setCart(newCart);
        localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
        
        //clear loading animation
        setTimeout(() => {
            setAdded("Added")
            setCartLoading("")
        }, 300);
        setTimeout(() => {
            setAdded("Add to Cart")
        }, 1800);
    }

    useEffect(() => {
        checkForShoppingCart();
        setCart(getCart());
    }, []);

    useCartEventListener(setCart) // cart changes in other tabs
    
    useEffect(() => {
        // set select item info after getting basic info from api
        setSelectedItem({
            ...selectedItem,
            "id": item.id,
            "name": item.name,
            "price": item.price,
            "image": item.images[0],
        })
    }, [item]);
    
    return (
        <>      
            <section>
                <Meta title={item.name} description={item.description} />
                <Link href="/merch/items"><a className="back-arrow"><img src="/imgs/arrow-down.svg" alt="Return"/></a></Link>
                <Images item={item}/>
                <div className="item-info">
                    <h3 className="title">{item.name}</h3>
                    <h4 className="price">{`$${item.price}`}</h4>
                    <h4 className="description">{item.description}</h4>
                    {/* <h4 className="color-lbl">Color</h4>
                    <Colors item={item}/> */}
                    <h4 className="size-lbl">Size</h4>
                    <Sizes item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem} pickSize={pickSize}/>
                    <h4 className="quantity-lbl">Quantity</h4>
                    <Quantity selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                    <h4 className={`add-to-cart-btn ${cartLoading}`} onClick={addItem}>{added}
                        <div className={`loading-animation ${cartLoading}`}></div>
                    </h4>
                    <div className="placeholder"></div>
                </div>
            </section>
        </>
    )
    
}

export default Item