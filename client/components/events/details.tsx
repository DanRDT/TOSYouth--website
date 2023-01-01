// import Meta from "../global/meta";
//get event from api/events/:id
const Details = ({event}) => {
    return ( 
        <div data-appear-on-scroll="false" className='event-details'>
            {/* <Meta title={event.name} description={event.description}/> */}
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