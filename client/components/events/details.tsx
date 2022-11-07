import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Meta from "../global/meta";

const Details = (eventId) => {
    const router = useRouter();
        
    const [event, setEvent] = useState(
        {
        "id": "",
        "name": "",
        "date": "",
        "description": "",
        "price": "",
        "image": ""
    }
    );

    useEffect(() => {
        if(!router.isReady) return;
        async function getEvent() {
            
            const res = await fetch(`/api/events/${eventId.eventId}`);
            const events = await res.json();
            await setEvent(events)
        }
        getEvent();

    }, [router.isReady]);
    
    return ( 
        <div data-appear-on-scroll="false" className='event-details'>
            <Meta title={event.name} description={event.description}/>
            <div className='event-details-img' style={{background: `var(--placeholder-color) url(${event.image}) no-repeat center/cover`}}></div>
            <div className='event-info event-details-info'>
                <h3>{event.name}</h3>
                <h4>Date: {event.date}</h4>
                <h4>Price: {event.price}</h4>
            </div>
            <h4 data-appear-on-scroll="false" className='description'>Description: {event.description}</h4>
        </div>
    )
    
}

export default Details