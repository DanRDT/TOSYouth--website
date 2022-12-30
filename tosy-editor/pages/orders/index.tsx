import Link from 'next/link'
import Meta from '../../components/global/meta'
import Orders from '../../components/orders/orders'

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`)

    return {
        props: {
            orders: await res.json(),
        }
    }
}

export default function Home({orders}) {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/merch.css" key="merch-css"/>
        <Meta title={"Merch Store"} description={"View all the items we have in our store"}/>
        <main>
            <div className='main-container'>
                <section>
                    <div className='subheading'>
                        <h3>Our Items</h3>
                        <Link href="/merch/printify" ><h4 className="subheading-btn">Printify</h4></Link>
                        {/* <div className="sort-btn">Sort</div> */}
                    </div>
                    <div className='merch-items'>
                        <Orders orders={orders}/>
                    </div>
                </section>
            </div>
        </main>
    </>
  )
}
