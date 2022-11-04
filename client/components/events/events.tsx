import Link from "next/link";
import { useEffect, useState } from "react"

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function getEvents() {
            const res = await fetch("/sampleDatabase/events.json")
            setEvents(await res.json());
        }
        getEvents();
    }, []);
    
    return (
        <>      
        {events.map((event) => (<div className='event-container' key={event.id}>
        <div className='event' data-appear-on-scroll="false" data-appear-on-scroll-delay="true" >
                <div className='event-img' style={{background: `var(--placeholder-color) url(${event.image}) no-repeat center/cover`}}></div>
                <div className='event-info'>
                    <h3>{event.name}</h3>
                    <h4>{event.date}</h4>
                    <Link href={`/events/${event.id}`}><a className='more-info-button' >More Info</a></Link>
                </div>
            </div>
        <div className='seperation-line'></div>
        </div>))}
        </>
    )
    
}

export default Events