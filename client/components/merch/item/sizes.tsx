import { useEffect, useState } from "react"

const Sizes = ({item, selectedItem, setSelectedItem, pickSize}) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [prevSelectedSize, setPrevSelectedSize] = useState(null)
    const [selectedSizes, setSelectedSizes] = useState([""])

    function setSize(size) {
        setSelectedItem(prevSelectedItem => {
            return {...prevSelectedItem, "size": size}
        })
    }
    
    useEffect(()=>{
        setSelectedSizes(prevSelectedSizes => {
            const tempArray = [...prevSelectedSizes]
            tempArray[prevSelectedSize] = ""
            tempArray[selectedSize] = "selected"
            setPrevSelectedSize(selectedSize)
            return tempArray
        })
    }, [selectedItem.size])

    return (
        <div className={`sizes ${pickSize}`}>
            {item.sizes.map((size,index) => (
                <div 
                    key={"size"+index} 
                    className={`size ${selectedSizes[index]}`} 
                    onClick={() => {
                        setSize(size)
                        setSelectedSize(index)
                    }}>
                    {size}
                </div>
            ))}
        </div>
    )
}

export default Sizes