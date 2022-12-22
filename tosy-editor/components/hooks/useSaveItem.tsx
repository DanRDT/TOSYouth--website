
export default function addItem(item, selectedItem, setSelectedItem, setSaveLoading, setSaved) {

    // add css class
    setSaveLoading("active-loading")

    
    //clear loading animation
    setTimeout(() => {
        setSaved("Saved")
        setSaveLoading("")
    }, 300);
    setTimeout(() => {
        setSaved("Save")
    }, 1800);
}