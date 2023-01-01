
export default function addItem(item, selectedItem, setSelectedItem, cart, setCart, setCartLoading, setPickSizePopup, setAdded) {
    // check if size was selected
    if (selectedItem.size == "") {
        setPickSizePopup("pick-size")
        setTimeout(() => {
            setPickSizePopup("")
        }, 2500);
        return
    }

    // add css class
    setCartLoading("active-loading")

    const newCart = cart.map(e => e);
    let itemExists = false;
    newCart.map((cartItem, i) => {
        // update cart item if exists
        if (cartItem.id == selectedItem.id && cartItem.size == selectedItem.size && cartItem.color == selectedItem.color) { // check id and size
            // max quantity
            let quantity = (Number(cartItem.quantity) + Number(selectedItem.quantity)) + ''
            if (Number(quantity) > 10) { 
                quantity = '10'
            }
            
            //update at index
            newCart[i] = {
                "id": selectedItem.id,
                "name": selectedItem.name,
                "price": selectedItem.price,
                "image": selectedItem.image,
                "color": selectedItem.color,
                "size": selectedItem.size,
                "variant_id": selectedItem.variant_id,
                "quantity": quantity
            }
            itemExists = true;
        }
    })

    // create new cart item if doesn't exist
    if (!itemExists) {
        newCart.push({
            "id": selectedItem.id,
            "name": selectedItem.name,
            "price": selectedItem.price,
            "image": selectedItem.image,
            "color": selectedItem.color,
            "size": selectedItem.size,
            "variant_id": selectedItem.variant_id,
            "quantity": Number(selectedItem.quantity) + ''
        })
    }

    // reset quantity
    setSelectedItem(prevItem => {
        return {...prevItem, "quantity": "1"}
    })

    // add item to state and localStorage
    setCart(newCart);
    localStorage.setItem("ShoppingCart", JSON.stringify(newCart))
    
    //clear loading animation
    setTimeout(() => {
        setAdded("Added")
        setCartLoading("")
    }, 300);
    setTimeout(() => {
        setAdded("Add to Cart")
    }, 1800);
}