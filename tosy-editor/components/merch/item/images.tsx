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


    function addImage() {
        const imageLink = (document.querySelector('.img-link') as HTMLInputElement).value;
        if (imageLink === "") return

        updatedItem.color_variants.map((variant)=>{
            if (variant.color === selectedItem.color) {
                console.log(variant);
                
            }
        })
        console.log(selectedItem);
        // setUpdatedItem(prev => {
        //     return {...prev}
        // })

        
    }

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
            <img className="main-image" src={selectedItem.images[selectedImage].src}/>
            <div className="extra-images">
                {selectedItem.images.map((image,index) => (
                    <div className='extra-image-container' title={image.active?"Image is active":"Image is hidden"} key={"image"+index}>
                        <img
                            className={`extra-image ${selectedImageBorder[index]} ${image.active}`}
                            src={image.src}
                            onClick={() => {
                                setSelectedImage(index)
                            }}
                        />
                        <div className={`img-active ${image.active}`} ></div>
                    </div>
                ))}
            </div>
            <div className="image-controls">
                <h4 className={`img-btn`} onClick={() => {}}>Hide
                    {/* <div className={`loading-animation`}></div> */}
                </h4>
                <h4 className={`img-btn`} onClick={() => {}}>Delete
                    {/* <div className={`loading-animation`}></div> */}
                </h4>
                <input className={`img-link`} placeholder="Enter a Link" type="text" >
                </input>
                <h4 className={`img-btn`} onClick={() => addImage()}>Add
                    {/* <div className={`loading-animation`}></div> */}
                </h4>
            </div>
        </div>

    )
}

export default Images