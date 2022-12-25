
export default async function deleteItem({updatedItem, setDeleteLoading, setDeleteItem}) {

    // add css class
    setDeleteLoading("active-loading")

    const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/${updatedItem.id}`, {
        method: 'DELETE'
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`${res.statusText} ~ Network code: ${res.status} \n ${res.body}`);
        }
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
    .then(()=>{
        //clear loading animation
        setTimeout(() => {
            setDeleteItem("Deleted")
            setDeleteLoading("")
        }, 300);
    })
    .then(()=>{
        setTimeout(() => {
            window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/merch`;
        }, 1000);
    })
    .catch((error) => {
        console.error('There has been a problem with the server request ~', error);
        //clear loading animation
        setTimeout(() => {
            setDeleteItem("Server Error")
            setDeleteLoading("")
        }, 300);
        setTimeout(() => {
            setDeleteItem("Delete")
        }, 1800);
    });
        


    
}