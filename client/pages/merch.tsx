import Link from 'next/link'
import Meta from '../components/global/meta'
import LatestItems from '../components/merch/latestItems'



export default function Home() {
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
                        <LatestItems/>
                    </div>
                </section>
                <section id="section3">
                    <div className='most-wanted-container'>
                        <div className='most-wanted-heading' data-appear-on-scroll="false">
                            <h2>The Most</h2>
                            <h1>WANTED</h1>
                            <Link href="/merch/items"><a href="/merch/items" className='shop-now-button'>Take a Look</a></Link>
                        </div>
                        <div className='most-wanted-imgs' data-appear-on-scroll="false">
                            <div className='most-wanted-short-img'></div>
                            <div className='most-wanted-tall-img'></div>
                        </div>
                    </div>
                </section>
                <section id="section4">
                    <Link href="/merch/items"><a href="/merch/items" className='shop-now-button' data-appear-on-scroll="false">Shop All</a></Link>            
                </section>
            </div>
        </main>
    </>
  )
}
