import Meta from '../../../components/Meta'
import Scripts from '../../../components/Scripts'



export default function Home() {
  return (
    <div>    
        <link rel="stylesheet" type="text/css" href="/css/events.css" key="events-css"/>
        <Meta/>
        <Scripts/>
        <main>
            <div className='main-container'>
                <section>
                    <h1 >Details</h1>
                    <div className='seperation-line'></div>
                    <div data-appear-on-scroll="false" className='event-details'>
                        <div className='event-details-img'></div>
                        <div className='event-info event-details-info'>
                            <h3>New Years</h3>
                            <h4>Date: 12/31/2022</h4>
                            <h4>Price: $60</h4>
                        </div>
                        <h4 data-appear-on-scroll="false" className='description'>Description: This will be the new years party. We will hangout for a night and eat stuff and play games and the such. This will be the new years party. we will hangout for a night and eat stuff and play games and the such. This will be the new years party. we will hangout for a night and eat stuff and play games and the such.</h4>
                    </div>
                    <a className='return-button' href="/events">Return</a>
                </section>
            </div>
        </main>
    </div>
  )
}
