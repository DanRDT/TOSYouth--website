
export default async function addItem({item, updatedItem, selectedItem, setSelectedItem, setSaveLoading, setSaved}) {

    // add css class
    setSaveLoading("active-loading")

    if (updatedItem.id != item.id) {
        setSaved("Input Error")
        setSaveLoading("")
        
        setTimeout(() => {
            setSaved("Save")
        }, 1800);
    }

    const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/${updatedItem.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItem)
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`${res.statusText} ~ Network code: ${res.status}`);
        }
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
    .then(()=>{
        //clear loading animation
        setTimeout(() => {
            setSaved("Saved")
            setSaveLoading("")
        }, 300);
        setTimeout(() => {
            setSaved("Save")
        }, 1800);
    })
    .catch((error) => {
        console.error('There has been a problem with the server request ~', error);
        //clear loading animation
        setTimeout(() => {
            setSaved("Server Error")
            setSaveLoading("")
        }, 300);
        setTimeout(() => {
            setSaved("Save")
        }, 1800);
    });
        


    
}