export default function getSelectedImage(images, i) {
    try {
        return images[i].src
    } catch (error) {
        return ""
    }
}