import Link from "next/link";

const Items = ({items}) => {
    
    return (
        <>      
        {items.map((item) => (
            <Link href={`/merch/printify/${item.id}`} key={item.id}><a className='merch-item' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
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

export default Items