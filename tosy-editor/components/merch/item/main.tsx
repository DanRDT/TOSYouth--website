import Link from "next/link";
import { useEffect, useState } from "react"
import Meta from "../../global/meta";
import Colors from "./colors";
import Images from "./images";
import Sizes from "./sizes";
import saveItem from "../../hooks/SaveItem";
import { useSelectedItem, useSetSelectedItem } from "../../context/itemContext"
import { useUpdatedItem, useSetUpdatedItem } from "../../context/updatedItemContext"
import MainImage from "./mainImage";
import DeleteItem from "../../hooks/DeleteItem";


const Item = ({item}) => {

    const selectedItem = useSelectedItem(); 
    const setSelectedItem = useSetSelectedItem();

    const updatedItem = useUpdatedItem(); 
    const setUpdatedItem = useSetUpdatedItem();

    const [saved, setSaved] = useState("Save");
    const [saveLoading, setSaveLoading] = useState("");
    
    const [deleteItem, setDeleteItem] = useState("Delete");
    const [deleteLoading, setDeleteLoading] = useState("");
    
    const [pickSizePopup, setPickSizePopup] = useState("");
    
   
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
            "selected_image": item.color_variants[0].images[0].src,
            "images": item.color_variants[0].images
        })

        setUpdatedItem(item)
    }, [item]);
    
    function activateItem(onSale) {
        if (onSale) {
            setUpdatedItem(prev => {
                return {...prev, item_on_sale: false}
            })
        } else {
            setUpdatedItem(prev => {
                return {...prev, item_on_sale: true}
            })
        }
    }
    
    return (
        <>      
            <section>
                <Meta title={item.name} description={item.description} />
                <Link href="/merch"><a className="back-arrow"><img src="/imgs/arrow-down.svg" alt="Return"/></a></Link>
                <Images/>
                <div className="item-info">
                    <h3 className="title">{updatedItem.name}</h3>
                    <h4 className="price">{`$${updatedItem.price}`}</h4>
                    <h4 className="description">{updatedItem.description}</h4>
                    <h4 className="color-lbl">Color</h4>
                    <Colors item={item} />
                    <h4 className="size-lbl">Size</h4>
                    <Sizes item={item} pickSizePopup={pickSizePopup} />
                    <h4 className="main-img-lbl">Main Image</h4>
                    <MainImage/>
                    <div className="item-on-sale-container">
                        <h4 className="">{`Item On Sale: ${updatedItem.item_on_sale?"True":"False"}`}</h4>
                        <h4 className={`activate-btn ${saveLoading}`} onClick={() => activateItem(updatedItem.item_on_sale)}>
                            {updatedItem.item_on_sale?"Deactivate":"Activate"}
                        </h4>
                    </div>
                    <div className="btns-container">
                        <h4 className={`save-btn ${saveLoading}`} onClick={() => saveItem({item, updatedItem, setSaveLoading, setSaved})}>{saved}
                            <div className={`loading-animation ${saveLoading}`}></div>
                        </h4>
                        <h4 className={`delete-btn ${deleteLoading}`} onClick={() => DeleteItem({updatedItem, setDeleteLoading, setDeleteItem})}>{deleteItem}
                            <div className={`loading-animation ${deleteLoading}`}></div>
                        </h4>
                    </div>
                    <div className="placeholder"></div>
                </div>
            </section>
        </>
    )
    
}

export default Item