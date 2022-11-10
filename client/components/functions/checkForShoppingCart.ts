export default checkForShoppingCart;

function setEmpty() {
    localStorage.setItem("ShoppingCart", "[]")
}

function checkForShoppingCart() {
    const cart = localStorage.getItem("ShoppingCart")

    if (cart == "" || cart == null ) {
        setEmpty()
    }   

    try {
        if (!Array.isArray(JSON.parse(cart))) {
            setEmpty()
        }
    } catch {
        setEmpty()
    }
}