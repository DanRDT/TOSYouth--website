import Meta from '../components/global/meta'



export default function Home() {
  return (
    <>    
    <link rel="stylesheet" type="text/css" href="/css/about-us.css"/>
      <Meta title={"About Us"} description={"Learn more about us and our goals"}/>
      <main>
            <div className='main-container'>
                <section>
                    <h1 >About Us</h1>
                    <div className='separation-line'></div>
                    <div className='grid'>
                        <div className='about-us-img' data-appear-on-scroll="false"></div>
                        <div className='about-us-info' data-appear-on-scroll="false">
                            <h2>Missionary</h2>
                            <h4>We do missionary trips and such insert more text here. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit missionary trips and such insert more text here. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h4>
                        </div>
                        <div className='about-us-info' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <h2>Youth Services</h2>
                            <h4>We have youth services every monday and such insert more text here. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit and such insert more text here. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h4>
                        </div>
                        <div className='about-us-img' data-appear-on-scroll="false" data-appear-on-scroll-delay="true"></div>
                        <div className='about-us-img' data-appear-on-scroll="false" data-appear-on-scroll-delay="true"></div>
                        <div className='about-us-info' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <h2>Other topic</h2>
                            <h4>Enter some other topic here and such insert more text here. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit and such insert more text here. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h4>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </>
  )
}
