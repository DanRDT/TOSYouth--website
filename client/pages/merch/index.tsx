import Meta from '../../components/global/Meta'
import Scripts from '../../components/global/Scripts'



export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/merch.css" key="merch-css"/>
        <Meta title={"Merch"} description={"Merch Store Home Page"}/>
        <Scripts/>
        <main>
            <div className='main-container'>
                <section id="section1">
                    <div className='new-arrivals' data-appear-on-scroll="false">
                        <div className='transparent-bg'></div>
                        <h2>Try Our</h2>
                        <h1>New Arrivals</h1>
                        <a href="/merch/items" className='shop-now-button'>Shop Now</a>
                    </div>
                </section>
                <section id="section2">
                    <div className='subheading'>THE LASTEST</div>
                    <div className='latest-items'>
                        <a href='' className='merch-item' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <div className='item-img'>
                                <img src="/imgs/sample-images/folded-hoodie.jpg" alt=""/>
                            </div>
                            <h3>Item 1</h3>
                            <h4>$25.00</h4>
                        </a>
                        <a href='' className='merch-item' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <div className='item-img'>
                                <img src="/imgs/sample-images/girl-in-hoodie.jpg" alt=""/>
                            </div>
                            <h3>Item 2</h3>
                            <h4>$20.00</h4>
                        </a>
                        <a href='' className='merch-item' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <div className='item-img'>
                                <img src="" alt=""/>
                            </div>
                            <h3>Item 3</h3>
                            <h4>$18.00</h4>
                        </a>
                        <a href='' className='merch-item' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <div className='item-img'>
                                <img src="" alt=""/>
                            </div>
                            <h3>Item 4</h3>
                            <h4>$22.00</h4>
                        </a>
                    </div>
                </section>
                <section id="section3">
                    <div className='most-wanted-container'>
                        <div className='most-wanted-heading' data-appear-on-scroll="false">
                            <h2>The Most</h2>
                            <h1>WANTED</h1>
                            <a href="/merch/items" className='shop-now-button'>Take a Look</a>
                        </div>
                        <div className='most-wanted-imgs' data-appear-on-scroll="false">
                            <div className='most-wanted-short-img'></div>
                            <div className='most-wanted-tall-img'></div>
                        </div>
                    </div>
                </section>
                <section id="section4">
                    <a href="/merch/items" className='shop-now-button' data-appear-on-scroll="false">Shop All</a>                
                </section>
            </div>
        </main>
    </>
  )
}
