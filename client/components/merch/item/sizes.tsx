import { useEffect, useState } from "react"
import { useSelectedItem, useSetSelectedItem } from "../../context/itemContext"


const Sizes = ({item, pickSizePopup}) => {
    const selectedItem = useSelectedItem(); 
    const setSelectedItem = useSetSelectedItem();

    const [selectedSize, setSelectedSize] = useState(null) //index
    const [prevSelectedSize, setPrevSelectedSize] = useState(null) //index
    const [selectedSizeCss, setSelectedSizeCss] = useState([""]) //array for css classnames

    function setSize(size, index) {
        // update selected size state
        const variant_id = item.color_variants[selectedItem.color_index].sizes[index].variant_id
        const price = item.color_variants[selectedItem.color_index].sizes[index].variant_price
        
        setSelectedItem(prevSelectedItem => {
            return {...prevSelectedItem, 
                "size": size,
                "variant_id": variant_id,
                "price": price
            }
        })
    }
    
    useEffect(()=>{
        
        // this resets size index and css when changing color
        if (selectedItem.size == "") {
            setSelectedSize(null)
            setPrevSelectedSize(null)
            setSelectedSizeCss([""])
        } 
        // add selected css class and remove prev
        else {
            setSelectedSizeCss(prevSelectedSizeCss => {
                const tempArray = [...prevSelectedSizeCss]
                tempArray[prevSelectedSize] = ""
                tempArray[selectedSize] = "selected"
                setPrevSelectedSize(selectedSize)
                return tempArray
            })
        }
        
    }, [selectedItem.size])

    return (
        <div className={`sizes ${pickSizePopup}`}>
            {selectedItem.sizes.map((size,index) => (
                <div 
                    key={"size"+index} 
                    className={`size ${selectedSizeCss[index]}`} 
                    onClick={() => {
                        setSize(size, index) // update state
                        setSelectedSize(index) // update css
                    }}>
                    {size}
                </div>
            ))}
        </div>
    )
}

export default Sizes