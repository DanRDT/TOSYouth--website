import { useSelectedItem, useSetSelectedItem } from "../../context/itemContext"

const Quantity = () => {
    const selectedItem = useSelectedItem(); 
    const setSelectedItem = useSetSelectedItem();

    function minus() {
        setSelectedItem(prevSelectedItem => {
            const quantity = (Number(prevSelectedItem.quantity) - 1) + '';
            // min quantity
            if (Number(quantity) < 1) {
                return {...prevSelectedItem}
            }
            return {...prevSelectedItem, "quantity": quantity}
        })
    }
    function plus() {
        setSelectedItem(prevSelectedItem => {
            const quantity = (Number(prevSelectedItem.quantity) + 1) + '';
            // max out quantity
            if (Number(quantity) > 10) {
                return {...prevSelectedItem}
            }
            return {...prevSelectedItem, "quantity": quantity}
        })
    }

    return (
        <div className="quantity">
            <button className="plus" onClick={() => plus()}>
                <div className="plus-line"></div>
                <div className="plus-line"></div>
            </button>
            <h3>{selectedItem.quantity}</h3>
            <button className="minus" onClick={() => minus()}>
                <div className="minus-line"></div>
            </button>
        </div>
    )
    
}

export default Quantity