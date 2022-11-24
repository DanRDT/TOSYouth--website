const Remove = ({item, cart, setCart}) => {

    const removeItem = (id,size,color) => {
        const newCart = [];
        cart.map((cartItem) => {
            if (cartItem.id != id || cartItem.size != size || cartItem.color != color) {
                newCart.push(item)
            }
        })
        setCart(newCart);
        localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
    }
    

    return (
        <>      
            <p onClick={() => {removeItem(item.id, item.size, item.color)}}>Remove</p> 
        </>
    )
}

export default Remove