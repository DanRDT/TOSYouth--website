import { useEffect, useState } from "react"
import { useSelectedItem, useSetSelectedItem } from "../../context/itemContext"


const Sizes = ({item, pickSizePopup}) => {
    const selectedItem = useSelectedItem(); 
    const setSelectedItem = useSetSelectedItem();

    const [selectedSize, setSelectedSize] = useState(null) //index
    const [prevSelectedSize, setPrevSelectedSize] = useState(null) //index
    const [selectedSizeCss, setSelectedSizeCss] = useState([""]) //array for css classnames

    function setSize(size) {
        // update selected size state
        setSelectedItem(prevSelectedItem => {
            return {...prevSelectedItem, "size": size}
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
                        setSize(size) // update state
                        setSelectedSize(index) // update css
                    }}>
                    {size}
                </div>
            ))}
        </div>
    )
}

export default Sizes