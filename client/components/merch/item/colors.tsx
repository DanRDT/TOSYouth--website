import { useEffect, useState } from "react"

const Colors = ({item, selectedItem, setSelectedItem, pickColorPopup}) => {
    const [selectedColor, setSelectedColor] = useState("0")
    const [prevSelectedColor, setPrevSelectedColor] = useState("0")
    const [selectedColorCss, setSelectedColorCss] = useState(["selected"])

    function setColor(color) {
        // update selected color state
        setSelectedItem(prevSelectedItem => {
            return {...prevSelectedItem, "color": color}
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
                    setColor(color_variant.color) // update state
                    setSelectedColor(index) // update css
                }}
                ></div>
                
            ))}
        </div>
    )
}

export default Colors

