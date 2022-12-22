import Link from "next/link";
import { useEffect, useState } from "react"
import Meta from "../../global/meta";
import Colors from "./colors";
import Images from "./images";
import Sizes from "./sizes";
import useSaveItem from "../../hooks/useSaveItem";
import { useSelectedItem, useSetSelectedItem } from "../../context/itemContext"
import { useUpdatedItem, useSetUpdatedItem } from "../../context/updatedItemContext"


const Item = ({item}) => {

    const selectedItem = useSelectedItem(); 
    const setSelectedItem = useSetSelectedItem();

    const updatedItem = useUpdatedItem(); 
    const setUpdatedItem = useSetUpdatedItem();

    const [saved, setSaved] = useState("Save");
    const [saveLoading, setSaveLoading] = useState("");
    const [pickSizePopup, setPickSizePopup] = useState("");
    
    function saveItem() {        
        // useSaveItem(item, selectedItem, setSelectedItem, setSaveLoading, setSaved)
    }
   
    useEffect(() => {
        // set select item info after getting basic info from api
        const sizes = []
        item.color_variants[0].sizes.map((variant)=>{
            sizes.push(variant.size)
        })

        setSelectedItem({
            ...selectedItem,
            "id": item.id,
            "name": item.name,
            "price": item.price,
            "color": item.color_variants[0].color,
            "sizes": sizes,
            "image": item.color_variants[0].images[0],
            "images": item.color_variants[0].images
        })

        setUpdatedItem(item)
    }, [item]);
    
    return (
        <>      
            <section>
                <Meta title={item.name} description={item.description} />
                <Link href="/merch"><a className="back-arrow"><img src="/imgs/arrow-down.svg" alt="Return"/></a></Link>
                <Images item={item}/>
                <div className="item-info">
                    <h3 className="title">{item.name}</h3>
                    <h4 className="price">{`$${selectedItem.price}`}</h4>
                    <h4 className="description">{item.description}</h4>
                    <h4 className="color-lbl">Color</h4>
                    <Colors item={item} />
                    <h4 className="size-lbl">Size</h4>
                    <Sizes item={item} pickSizePopup={pickSizePopup} />
                    <h4 className={`save-btn ${saveLoading}`} onClick={() => saveItem()}>{saved}
                        <div className={`loading-animation ${saveLoading}`}></div>
                    </h4>
                    <div className="placeholder"></div>
                </div>
            </section>
        </>
    )
    
}

export default Item