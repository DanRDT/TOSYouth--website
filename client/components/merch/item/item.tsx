import Link from "next/link";
import { useEffect, useState } from "react"
import Meta from "../../global/meta";
// import Colors from "./colors";
import Images from "./images";
import Quantity from "./quantity";
import Sizes from "./sizes";
import { useCart, useSetCart } from "../../context/cartContext";
import useAddItem from "../../hooks/useAddItem";
import addItem from "../../hooks/useAddItem";


const Item = ({item}) => {
    const cart = useCart();
    const setCart = useSetCart();

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
    
    function addItem() {
        useAddItem(item, selectedItem, setSelectedItem, cart, setCart, setCartLoading, setPickSize, setAdded)
    }
   
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
                    <h4 className={`add-to-cart-btn ${cartLoading}`} onClick={() => addItem()}>{added}
                        <div className={`loading-animation ${cartLoading}`}></div>
                    </h4>
                    <div className="placeholder"></div>
                </div>
            </section>
        </>
    )
    
}

export default Item