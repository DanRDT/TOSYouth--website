import Details from '../../components/events/details'
import Meta from '../../components/global/meta'
import Scripts from '../../components/global/scripts'



export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/events.css" key="events-css"/>
        
        <Scripts/>
        <main>
            <div className='main-container'>
                <section>
                    <h1 >Details</h1>
                    <div className='seperation-line'></div>
                    <Details/>
                    <a className='return-button' href="/events">Return</a>
                </section>
            </div>
        </main>
    </>
  )
}
