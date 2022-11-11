
const Sizes = ({item, selectedItem, setSelectedItem}) => {

    return (
        <div className="sizes">
            {item.sizes.map((size,index) => (
                <div key={"size"+index} className="size">{size}</div>
            ))}
        </div>
    )
    
}

export default Sizes