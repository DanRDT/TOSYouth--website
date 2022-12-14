import Meta from '../../components/global/meta'
import Events from '../../components/events/events'

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`)
    
    return {
        props: {
            events: await res.json(),
        },
    }
}

export default function Home({events}) {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/events.css" key="events-css"/>
        <Meta title={"Events"} description={"View upcoming events"}/>
        <main>
            <div className='main-container'>
                <section>
                    <h1>Upcoming Events</h1>
                    <div className='separation-line'></div>
                    <div className='events' key="events">
                        <Events events={events}/>
                        <h3 className='create-new-event-btn' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">Create new event</h3>
                    </div>                
                </section>
            </div>
        </main>
    </>
  )
}
