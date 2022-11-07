import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import Colors from "./colors";
import Images from "./images";
import Quantity from "./quantity";
import Sizes from "./sizes";

const Item = (id) => {
    const router = useRouter();

    const [item, setItem] = useState({
        "id":"",
        "name":"",
        "description":"",
        "price":"",
        "images":[""],
        "type":"",
        "gender":"",
        "colors":[""],
        "sizes":[""]
    });

    useEffect(() => {
        if(!router.isReady) return;
        async function getItem() {            
            const res = await fetch(`/api/merch/${id.id}`)
            console.log(`/api/merch/${id.id}`)
            setItem(await res.json());
        }
        getItem();
    }, [router.isReady]);
    
    return (
        <>      
        <section>
                <Images/>
                <div className="item-info">
                    <h3 className="title">{item.name}</h3>
                    <h4 className="price">{`$${item.price}`}</h4>
                    <h4 className="description">{item.description}</h4>
                    <h4 className="color-lbl">Color</h4>
                    <Colors/>
                    <h4 className="size-lbl">Size</h4>
                    <Sizes/>
                    <h4 className="quantity-lbl">Quantity</h4>
                    <Quantity/>
                    <h4 className="add-to-cart-btn">Add to Cart</h4>
                    <div className="plchlder"></div>
                </div>
            </section>
        </>
    )
    
}

export default Item