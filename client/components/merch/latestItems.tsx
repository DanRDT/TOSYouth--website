import Link from "next/link";

const LatestItems = ({latest_items}) => {
    
    // display 4 latest items
    return (
        <>
        {latest_items.map((item) => (
            <Link href={`/merch/items/${item.id}`} key={item.id}><a className='merch-item' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                <div className='item-img'>
                    <img src={item.main_image} alt=""/>
                </div>
                <h3>{item.name}</h3>
                <h4>${item.price}</h4>
            </a></Link>
        ))}
        </>
    )
    
}

export default LatestItems