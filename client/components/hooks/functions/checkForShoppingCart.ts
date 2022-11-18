export default checkForShoppingCart;

function setEmpty() {
    localStorage.setItem("ShoppingCart", "[]")
}

//check if shopping cart exists or is an object
function checkForShoppingCart(): void {
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