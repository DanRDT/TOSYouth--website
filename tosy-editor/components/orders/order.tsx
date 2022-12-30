import Link from "next/link";
import Meta from "../global/meta";


const Order = ({order}) => {

    
    return (
        <>      
            <section>
                <Meta title={`${order.name}'s Order`} />
                <Link href="/orders"><a className="back-arrow"><img src="/imgs/arrow-down.svg" alt="Return"/></a></Link>
                <div className="order-items">
                    {order.items.map((item, index) => (
                        <div key={"orderItem"+index} className="order-item-container">
                            <div className="order-item">
                                <Link href={`/merch/items/${item.id}`}><a><img className="order-item-img" src={item.image}/></a></Link>
                                <div className="order-item-info">
                                    <Link href={`/merch/items/${item.id}`}><a><h3>{item.name}</h3></a></Link>
                                    <h4>${item.price}</h4>
                                    <h4>Size: {item.size}</h4>
                                    <h4>Color: {item.color}</h4>
                                    <h4>Quantity: {item.quantity}</h4>
                                </div>
                            </div>
                            <div className="separation-line"></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
    
}

export default Order






