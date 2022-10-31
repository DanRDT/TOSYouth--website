const navigationButton = document.querySelector('#menu-button')
const navigation = document.querySelector('nav')

 

export default navigationButton.addEventListener('click', () => {
    const visibility = navigation.getAttribute('data-visible')
    console.log("test button")
    if (visibility === "false") {
        navigation.setAttribute("data-visible", "true")
        navigationButton.setAttribute("data-active", "true")
    }
    else if (visibility === "true") {
        navigation.setAttribute("data-visible", "false")
        navigationButton.setAttribute("data-active", "false")
    }

})