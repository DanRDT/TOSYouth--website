import Meta from '../../../components/global/meta'
import Items from '../../../components/merch/items'



export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/merch.css" key="merch-css"/>
        <Meta title={"Merch Store"} description={"View all the items we have in our store"}/>
        <main>
            <div className='main-container'>
                <section>
                    <div className='subheading'>
                        <h3>Our Items</h3>
                        {/*<div className='sort-button">Sort</div>*/}
                    </div>
                    <div className='merch-items'>
                        <Items/>
                    </div>
                </section>
            </div>
        </main>
    </>
  )
}
