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
        {items.map((item) => (
            <Link href={`/merch/items/${item.id}`} key={item.id}><a className='merch-item' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                <div className='item-img'>
                    <img src={item.image} alt=""/>
                </div>
                <h3>{item.name}</h3>
                <h4>${item.price}</h4>
            </a></Link>
        ))}
        </>
    )
    
}

export default Events