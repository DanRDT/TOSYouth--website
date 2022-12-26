import Link from 'next/link'
import Meta from '../../components/global/meta'
import LatestItems from '../../components/merch/latestItems'

export async function getStaticProps() {
    const itemsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/latest-items`)
    const mostWantedRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/most-wanted`)
    
    return {
        props: {
            latest_items: await itemsRes.json(),
            mostWanted: await mostWantedRes.json(),
        },
        revalidate: Number(process.env.REVALIDATE),
    }
}

export default function Home({latest_items, mostWanted}) {
    
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/merch.css" key="merch-css"/>
        <Meta title={"Merch"} description={"Merch Store Home Page"}/>
        <main>
            <div className='main-container'>
                <section id="section1">
                    <div className='new-arrivals' data-appear-on-scroll="false">
                        <div className='transparent-bg'></div>
                        <h2>Try Our</h2>
                        <h1>New Arrivals</h1>
                        <Link href="/merch/items"><a className='shop-now-button'>Shop Now</a></Link>
                    </div>
                </section>
                <section id="section2">
                    <div className='subheading'>THE LATEST</div>
                    <div className='latest-items'>
                        <LatestItems latest_items={latest_items}/>
                    </div>
                </section>
                <section id="section3">
                    <div className='most-wanted-container'>
                        <div className='most-wanted-heading' data-appear-on-scroll="false">
                            <h2>The Most</h2>
                            <h1>WANTED</h1>
                            <Link href={`/merch/items/${mostWanted.item_id}`}><a className='shop-now-button'>Take a Look</a></Link>
                        </div>
                        <div className='most-wanted-imgs' data-appear-on-scroll="false">
                            <div className='most-wanted-short-img' 
                                style={{backgroundImage: `url(${mostWanted.short_image})`}}></div>
                            <div className='most-wanted-tall-img' 
                                style={{backgroundImage: `url(${mostWanted.tall_image})`}}></div>
                        </div>
                    </div>
                </section>
                <section id="section4">
                    <Link href="/merch/items"><a className='shop-now-button' data-appear-on-scroll="false">Shop All</a></Link>            
                </section>
            </div>
        </main>
    </>
  )
}
