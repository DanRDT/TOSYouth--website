import Link from "next/link";
import Meta from "../global/meta";


const Item = ({order}) => {

    
    return (
        <>      
            <section>
                <Meta title={`${order.name}'s Order`} />
                <Link href="/orders"><a className="back-arrow"><img src="/imgs/arrow-down.svg" alt="Return"/></a></Link>
                
            </section>
        </>
    )
    
}

export default Item