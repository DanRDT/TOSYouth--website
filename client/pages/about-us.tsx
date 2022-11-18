import Meta from '../components/global/meta'

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about-us`)
    
    return {
        props: {
            info: await res.json(),
        },
        revalidate: Number(process.env.REVALIDATE),
    }
}

export default function Home({info}) {
    
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
                        <div className='about-us-img' style={{backgroundImage: `url(${info.section1.image})`}} data-appear-on-scroll="false"></div>
                        <div className='about-us-info' data-appear-on-scroll="false">
                            <h2>{info.section1.heading}</h2>
                            <h4>{info.section1.text}</h4>
                        </div>
                        <div className='about-us-info' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <h2>{info.section2.heading}</h2>
                            <h4>{info.section2.text}</h4>
                        </div>
                        <div className='about-us-img' style={{backgroundImage: `url(${info.section2.image})`}} data-appear-on-scroll="false" data-appear-on-scroll-delay="true"></div>
                        <div className='about-us-img' style={{backgroundImage: `url(${info.section3.image})`}} data-appear-on-scroll="false" data-appear-on-scroll-delay="true"></div>
                        <div className='about-us-info' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <h2>{info.section3.heading}</h2>
                            <h4>{info.section3.text}</h4>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </>
  )
}
