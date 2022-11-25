import CartItems from "./cart";

const Remove = ({item, cart, setCart}) => {

    const removeItem = (id,size,color,variant_id) => {
        
        const newCart = [];
        cart.map((cartItem) => {
            if (cartItem.id != id || cartItem.size != size || cartItem.color != color) {
                newCart.push(cartItem)
            }
            // if (variant_id != cartItem.variant_id) {
            //     newCart.push(cartItem)
            // }
        })
        
        setCart(newCart);
        localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
    }
    

    return (
        <>      
            <p onClick={() => {removeItem(item.id, item.size, item.color, item.variant_id)}}>Remove</p> 
        </>
    )
}

export default Remove