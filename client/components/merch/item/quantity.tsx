
const Quantity = ({selectedItem, setSelectedItem}) => {

    function minus() {
        setSelectedItem(prevSelectedItem => {
            const quantity = (Number(prevSelectedItem.quantity) - 1) + '';
            if (Number(quantity) < 1) {
                return {...prevSelectedItem}
            }
            return {...prevSelectedItem, "quantity": quantity}
        })
    }
    function plus() {
        setSelectedItem(prevSelectedItem => {
            const quantity = (Number(prevSelectedItem.quantity) + 1) + '';
            if (Number(quantity) > 10) {
                return {...prevSelectedItem}
            }
            return {...prevSelectedItem, "quantity": quantity}
        })
    }

    return (
        <div className="quantity">
            <div className="plus" onClick={() => plus()}>
                <div className="plus-line"></div>
                <div className="plus-line"></div>
            </div>
            <h3>{selectedItem.quantity}</h3>
            <div className="minus" onClick={() => minus()}>
                <div className="minus-line"></div>
            </div>
        </div>
    )
    
}

export default Quantity