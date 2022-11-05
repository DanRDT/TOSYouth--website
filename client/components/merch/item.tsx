import Link from "next/link";
import { useEffect, useState } from "react"

const Events = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getItems() {
            const res = await fetch("/sampleDatabase/items.json")
            setItems(await res.json());
        }
        getItems();
    }, []);
    
    return (
        <>      
        
        </>
    )
    
}

export default Events