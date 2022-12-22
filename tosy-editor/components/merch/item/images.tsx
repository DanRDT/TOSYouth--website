import { useEffect, useState } from "react"
import { useSelectedItem } from "../../context/itemContext"
import { useUpdatedItem, useSetUpdatedItem } from "../../context/updatedItemContext"



const Images = ({item}) => {
    const selectedItem = useSelectedItem(); 

    const updatedItem = useUpdatedItem(); 
    const setUpdatedItem = useSetUpdatedItem();

    const [selectedImage, setSelectedImage] = useState(0)
    const [prevImageBorder, setPrevImageBorder] = useState(0)
    const [selectedImageBorder, setSelectedImageBorder] = useState(["selected"])


    useEffect(() => {
        // change selected image border and remove prev border
        setSelectedImageBorder(prevSelectedImageBorder => {
            const tempArray = [...prevSelectedImageBorder]
            tempArray[prevImageBorder] = ""
            tempArray[selectedImage] = "selected"
            setPrevImageBorder(selectedImage)
            return tempArray
        })
    }, [selectedImage])

    
    return (    
    
        <div className="images">
            <img className="main-image" src={selectedItem.images[selectedImage]}/>
            <div className="extra-images">
                {selectedItem.images.map((image,index) => (
                    <img
                        key={"image"+index}
                        className={`extra-image ${selectedImageBorder[index]}`}
                        src={image}
                        onClick={() => {
                            setSelectedImage(index)
                        }}
                    />
                ))}
            </div>
            <div className="image-controls">
                <h4 className={`img-btn`} onClick={() => {}}>Hide
                    {/* <div className={`loading-animation`}></div> */}
                </h4>
                <h4 className={`img-btn`} onClick={() => {}}>Delete
                    {/* <div className={`loading-animation`}></div> */}
                </h4>
                <h4 className={`img-btn`} onClick={() => {}}>Add
                    {/* <div className={`loading-animation`}></div> */}
                </h4>
            </div>
        </div>

    )
}

export default Images