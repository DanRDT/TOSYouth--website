import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import checkForShoppingCart from "../../hooks/checkForShoppingCart";
import getCart from "../../hooks/getCart";
import Meta from "../../global/meta";
import useCartEventListener from "../../hooks/useCartEventListener";
import Colors from "./colors";
import Images from "./images";
import Quantity from "./quantity";
import Sizes from "./sizes";

const Item = ({id}) => {
    const router = useRouter();
    
    const [cart, setCart] = useState([]);
    const [added, setAdded] = useState("Add to Cart");
    const [cartLoading, setCartLoading] = useState("");
    const [pickSize, setPickSize] = useState("");

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
        "image": "",
        // "color": "",
        "size": "",
        "quantity": "1"
    });
    
    const addItem = () => {
        if (selectedItem.size == "") {
            setPickSize("pick-size")
            setTimeout(() => {
                setPickSize("")
            }, 2500);
            return
        }
        setCartLoading("active-loading")
        const newCart = cart.map(e => e);
        let exists = false;
        newCart.map((cartItem, i) => {
            if (cartItem.id == selectedItem.id && cartItem.size == selectedItem.size) {
                let quantity = (Number(cartItem.quantity) + Number(selectedItem.quantity)) + ''
                if (Number(quantity) > 10) {
                    quantity = '10'
                }
                newCart[i] = {
                    "id": selectedItem.id,
                    "name": selectedItem.name,
                    "price": selectedItem.price,
                    "image": selectedItem.image,
                    // "color": selectedItem.color,
                    "size": selectedItem.size,
                    "quantity": quantity
                }
                exists = true;
            }
        })
        if (!exists) {
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

        setSelectedItem(prevItem => {
            return {...prevItem, "quantity": "1"}
        })

        setCart(newCart);
        localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
        
        setTimeout(() => {
            setAdded("Added")
            setCartLoading("")
        }, 300);
        setTimeout(() => {
            setAdded("Add to Cart")
            setCartLoading("")
            setPickSize("")
        }, 1800);
    }

    useEffect(() => {
        checkForShoppingCart();
        setCart(getCart());
    }, []);
    useCartEventListener(setCart)
    
    useEffect(() => {
        if(!router.isReady) return;
        async function getItem() {            
            const res = await fetch(`/api/merch/${id}`)
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
                    {/* <h4 className="color-lbl">Color</h4> */}
                    {/* <Colors item={item}/> */}
                    <h4 className="size-lbl">Size</h4>
                    <Sizes item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem} pickSize={pickSize}/>
                    <h4 className="quantity-lbl">Quantity</h4>
                    <Quantity selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                    <h4 className={`add-to-cart-btn ${cartLoading}`} onClick={addItem}>{added}
                        <div className={`loading-animation ${cartLoading}`}></div>
                    </h4>
                    <div className="plchlder"></div>
                </div>
            </section>
        </>
    )
    
}

export default Item