import { useEffect, useState } from "react"
import { useSelectedItem, useSetSelectedItem } from "../../context/itemContext"
import { useUpdatedItem, useSetUpdatedItem } from "../../context/updatedItemContext"



const Images = ({item}) => {
    const selectedItem = useSelectedItem();
    const setSelectedItem = useSetSelectedItem();

    const updatedItem = useUpdatedItem(); 
    const setUpdatedItem = useSetUpdatedItem();

    const [selectedImage, setSelectedImage] = useState(0)
    const [prevImageBorder, setPrevImageBorder] = useState(0)
    const [selectedImageBorder, setSelectedImageBorder] = useState(["selected"])


    function addImage() {
        const imageLink = (document.querySelector('.img-link') as HTMLInputElement).value;
        if (imageLink === "") return
        
        updatedItem.color_variants.map((variant, i)=>{
            if (variant.color != selectedItem.color) return
            let images = variant.images
            images.push({"src": imageLink, "active": false})

            updateImageState(images, i)
        })

    }

    function deleteImage() {
        if(typeof selectedItem[selectedImage] === 'undefined') return
        updatedItem.color_variants.map((variant, i)=>{
            if (variant.color != selectedItem.color) return

            let images = variant.images.filter((image, index) => { 
                if (index != selectedImage) {
                    return image;
                }
            });
            setSelectedImage(0)

            updateImageState(images, i)
        })

    }

    function hideOrShowImage() {
        if(typeof selectedItem[selectedImage] === 'undefined') return
        
        updatedItem.color_variants.map((variant, i)=>{
            if (variant.color != selectedItem.color) return
            
            let images = variant.images
            if (images[selectedImage].active) {
                images[selectedImage].active = false
            } else {
                images[selectedImage].active = true
            }

            updateImageState(images, i)
        })

    }

    function updateImageState(images, i) {

            setUpdatedItem(prev => {
                prev.color_variants[i].images = images
                return prev
            })
            //updates GUI
            setSelectedItem({
                ...selectedItem,
                "images": images
            })
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

    function getMainImage() {
        try {
            return selectedItem.images[selectedImage].src
        } catch (error) {
            return ""
        }
    }
    
    return (    
    
        <div className="images">
            <img className="main-image" src={getMainImage()}/>
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
                <h4 className={`img-btn`} onClick={() => hideOrShowImage()}>Hide/Show
                    {/* <div className={`loading-animation`}></div> */}
                </h4>
                <h4 className={`img-btn`} onClick={() => deleteImage()}>Delete
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