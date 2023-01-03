import { useState } from "react"
import { useUpdatedItem } from "../../context/updatedItemContext"
import useDeleteItem from "../../hooks/DeleteItem";


const Delete = () => {

    const updatedItem = useUpdatedItem(); 

    const [deleteItem, setDeleteItem] = useState("Delete");
    const [deleteLoading, setDeleteLoading] = useState("");
    
    return (
    <>      
        <h4 className={`delete-btn ${deleteLoading}`} onClick={() => useDeleteItem({updatedItem, setDeleteLoading, setDeleteItem})}>{deleteItem}
            <div className={`loading-animation ${deleteLoading}`}></div>
        </h4>
    </>
    )
    
}

export default Delete