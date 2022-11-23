import Link from "next/link";

const LatestItems = ({items}) => {
    
    // display 4 latest items
    return (
        <>
        {items.slice(-4).map((item) => (
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

export default LatestItems