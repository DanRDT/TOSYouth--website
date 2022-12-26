// required incase images[i] doesn't exist and it throws error

export default function getSelectedImage(images, i) {
    try {
        return images[i].src
    } catch (error) {
        return ""
    }
}