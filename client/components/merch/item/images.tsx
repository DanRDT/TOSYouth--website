import { useEffect, useRef, useState } from "react"

const Images = ({item}) => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [prevImageBorder, setPrevImageBorder] = useState(0)
    const [selectedImageBorder, setSelectedImageBorder] = useState(["selected"])


    useEffect(() => {
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
            <img className="main-image" src={item.images[selectedImage]}/>
            <div className="extra-images">
                {item.images.map((image,index) => (
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