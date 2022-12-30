import Order from "../../components/orders/order"

export async function getServerSideProps({params}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/${params.orderId}`)
    const data = await res.json()
    
    if (!data) {
        return {
          notFound: true,
        }
    }
    
    return {
        props: {
            order: data,
        }
    }
}

export default function Home({order}) {

    return (
        <>    
            <link rel="stylesheet" type="text/css" href="/css/merch-item.css"/>
            <main>
                <div className='main-container'>
                <div className="separation-line"></div>
                <Order order={order}/>
                </div>
            </main>
        </>
    )
}
