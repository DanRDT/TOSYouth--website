export default checkForShoppingCart;

function checkForShoppingCart() {
    const cart = localStorage.getItem("ShoppingCart")
    if (cart == null) {
        localStorage.setItem("ShoppingCart", "[]")
    }   
}