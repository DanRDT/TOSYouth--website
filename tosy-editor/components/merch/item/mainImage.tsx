import { useSelectedItem } from "../../context/itemContext"
import { useUpdatedItem, useSetUpdatedItem } from "../../context/updatedItemContext"


const MainImage = () => {
    const updatedItem = useUpdatedItem()
    const setUpdatedItem = useSetUpdatedItem()

    const selectedItem = useSelectedItem();

    function setMainImage() {
        setUpdatedItem(prev => {
            return {...prev, "main_image": selectedItem.selected_image}
        })
    }
    
    return (    
    <>
        <div className='image-container' >
            <img className='extra-image ' src={updatedItem.main_image} title={"This is the main image shown on the items page"}/>
            <h4 className={`img-btn`} onClick={() => setMainImage()} 
                title={"Changes to selected image"}>Change</h4>
        </div>
    </>
    )
}

export default MainImage