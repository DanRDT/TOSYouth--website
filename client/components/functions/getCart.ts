export default function getCart() {
    const cart = JSON.parse(localStorage.getItem("ShoppingCart"))
    return cart;
}