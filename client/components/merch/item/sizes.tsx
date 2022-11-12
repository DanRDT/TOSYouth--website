import { useEffect, useState } from "react"

const Sizes = ({item, selectedItem, setSelectedItem, pickSize}) => {


    function setSize(size) {
        setSelectedItem(prevSelectedItem => {
            return {...prevSelectedItem, "size": size}
        })
    }
    function selectedSize(size) {
        if (size == selectedItem.size) {
            return "selected"
        }
        return ""
    }
    
    return (
        <div className={`sizes ${pickSize}`}>
            {item.sizes.map((size,index) => (
                <div key={"size"+index} className={`size ${selectedSize(size)}`} onClick={() => setSize(size)}>{size}</div>
            ))}
        </div>
    )
    
}

export default Sizes