import { useEffect, useState } from "react"

const Sizes = ({item, selectedItem, setSelectedItem, pickSizePopup}) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [prevSelectedSize, setPrevSelectedSize] = useState(null)
    const [selectedSizeCss, setSelectedSizeCss] = useState([""])

    function setSize(size) {
        // update selected size state
        setSelectedItem(prevSelectedItem => {
            return {...prevSelectedItem, "size": size}
        })
    }
    
    useEffect(()=>{
        // add selected css class and remove prev
        setSelectedSizeCss(prevSelectedSizeCss => {
            const tempArray = [...prevSelectedSizeCss]
            tempArray[prevSelectedSize] = ""
            tempArray[selectedSize] = "selected"
            setPrevSelectedSize(selectedSize)
            return tempArray
        })
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