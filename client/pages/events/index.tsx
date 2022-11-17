import Meta from '../../components/global/meta'
import Events from '../../components/events/events'

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`)
    
    return {
        props: {
            events: await res.json(),
        },
        revalidate: process.env.REVALIDATE,
    }
}

export default function Home({events}) {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/events.css" key="events-css"/>
        <Meta title={"Events"} description={"View upcoming events"}/>
        <main>
            <div className='main-container'>
                <section id="section1">
                    <h1>Youth Services</h1>
                    <div className='separation-line'></div>
                    <h2 data-appear-on-scroll="false">Every Monday at 7PM <br/> Contact us if you would like to participate </h2>
                </section>
                <section id="section2">
                    <h1>Upcoming Events</h1>
                    <div className='separation-line'></div>
                    <div className='events' key="events">
                        <Events events={events}/>
                        <h3 className='events-to-come-lbl' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">More Events To Come...</h3>
                    </div>                
                </section>
            </div>
        </main>
    </>
  )
}
