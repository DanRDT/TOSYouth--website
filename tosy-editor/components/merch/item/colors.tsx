import { useEffect, useState } from "react"
import { useSelectedItem, useSetSelectedItem } from "../../context/itemContext"

const Colors = ({item}) => {
    const selectedItem = useSelectedItem(); 
    const setSelectedItem = useSetSelectedItem();

    const [selectedColor, setSelectedColor] = useState("0")
    const [prevSelectedColor, setPrevSelectedColor] = useState("0")
    const [selectedColorCss, setSelectedColorCss] = useState(["selected"])

    function setColor(color, index) {
        // update selected color state
        const sizes = []
        item.color_variants[index].sizes.map((variant)=>{
            sizes.push(variant.size)
        })
        const images = []
        item.color_variants[index].images.map((image)=>{
            images.push(image)
        })

        // update the selected item color
        // this also updates the sizes and images connected to that color 
        setSelectedItem(prevSelectedItem => {
            return {...prevSelectedItem, 
                "color": color,
                "color_index": index,
                "sizes": sizes,
                "image": images[0],
                "images": images,
                //reset size selections
                "size": "",
                "variant_id": "",
                "price": item.price,
            }
        })
    }
    
    useEffect(()=>{
        // add selected css class and remove prev
        setSelectedColorCss(prevSelectedColorCss => {
            const tempArray = [...prevSelectedColorCss]
            tempArray[prevSelectedColor] = ""
            tempArray[selectedColor] = "selected"
            setPrevSelectedColor(selectedColor)
            return tempArray
        })
        
    }, [selectedItem.color])

    return (    
        <div className="colors">
            {item.color_variants.map((color_variant,index) => (
                <div key={"color"+index} title={color_variant.color}
                className={`color ${selectedColorCss[index]}`}
                style={{backgroundColor: color_variant.hexCode}}
                onClick={() => {
                    setColor(color_variant.color, index) // update state
                    setSelectedColor(index) // update css
                }}
                ></div>
                
            ))}
        </div>
    )
}

export default Colors

