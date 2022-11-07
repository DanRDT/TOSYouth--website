
const Sizes = (item) => {

    return (
        <div className="sizes">
            {item.id.sizes.map((size,index) => {
                return(
                <div key={"size"+index} className="size">{size}</div>
                )
            })}
        </div>
    )
    
}

export default Sizes