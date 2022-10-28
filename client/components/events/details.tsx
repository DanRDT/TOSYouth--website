import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Meta from "../global/meta";

const Details = () => {
    const router = useRouter();
    const eventId = router.query.eventId
        
    const [event, setEvent] = useState({
        "id": "",
        "name": "",
        "date": "",
        "description": "",
        "price": ""
    });

    useEffect(() => {
        if(!router.isReady) return;
        async function getEvent() {
            const res = await fetch("/sampleDatabase/events.json");
            const events = await res.json();

            events.map((item, index) => {
                if (eventId == item.id) {
                    setEvent(item);
                }
            })

        }
        getEvent();

    }, [router.isReady]);
    
    return (
        <div data-appear-on-scroll="false" className='event-details'>
            <div className='event-details-img'></div>
            <div className='event-info event-details-info'>
                <h3>{event.name}</h3>
                <h4>Date: {event.date}</h4>
                <h4>Price: {event.price}</h4>
            </div>
            <Meta title={""} description={""}/>
            <h4 data-appear-on-scroll="false" className='description'>Description: {event.description}</h4>
        </div>
    )
    
}

export default Details