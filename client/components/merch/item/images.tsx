import { useEffect, useState } from "react"
import { useSelectedItem, useSetSelectedItem } from "../../context/itemContext"


const Images = ({item}) => {
    const selectedItem = useSelectedItem(); 

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
        </div>
    )
}

export default Images