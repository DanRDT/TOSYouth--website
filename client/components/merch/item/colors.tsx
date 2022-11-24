import { useEffect, useState } from "react"

const Colors = ({item, selectedItem, setSelectedItem, pickColorPopup, set}) => {
    const [selectedColor, setSelectedColor] = useState("0")
    const [prevSelectedColor, setPrevSelectedColor] = useState("0")
    const [selectedColorCss, setSelectedColorCss] = useState(["selected"])

    function setColor(color, index) {
        // update selected color state
        const sizes = []
        item.color_variants[index].sizes.map((variant)=>{
            sizes.push(variant.size)
        })
        setSelectedItem(prevSelectedItem => {
            return {...prevSelectedItem, 
                "color": color,
                "sizes": sizes,
                "size": ""
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

