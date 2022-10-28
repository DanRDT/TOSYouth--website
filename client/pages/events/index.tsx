import Meta from '../../components/global/Meta'
import Scripts from '../../components/global/Scripts'



export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/events.css" key="events-css"/>
        <Meta title={"Events"} description={"View upcoming events"}/>
        <Scripts/>
        <main>
            <div className='main-container'>
                <section id="section1">
                    <h1>Youth Services</h1>
                    <div className='seperation-line'></div>
                    <h2 data-appear-on-scroll="false">Every Monday at 7PM <br/> Contact us if you would like to participate </h2>
                </section>
                <section id="section2">
                    <h1>Upcoming Events</h1>
                    <div className='seperation-line'></div>
                    <div className='events'>
                        <div className='event' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <div className='event-img'></div>
                            <div className='event-info'>
                                <h3>Park Day</h3>
                                <h4>10/15/2022</h4>
                                <a className='more-info-button' href="/events/1">More Info</a>
                            </div>
                        </div>
                        <div className='seperation-line'></div>
                        <div className='event' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">
                            <div className='event-img'></div>
                            <div className='event-info'>
                                <h3>New Years</h3>
                                <h4>12/31/2022</h4>
                                <a className='more-info-button' href="/events/1">More Info</a>
                            </div>
                        </div>
                        <div className='seperation-line'></div>
                        <h3 className='events-to-come-lbl' data-appear-on-scroll="false" data-appear-on-scroll-delay="true">More Events To Come...</h3>
                    </div>                
                </section>
            </div>
        </main>
    </>
  )
}
