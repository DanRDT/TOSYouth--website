import Link from 'next/link';
import { useRouter } from 'next/router';
import Details from '../../components/events/details'



export default function Home() {
  const router = useRouter();
  const eventId = router.query.eventId

  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/events.css" key="events-css"/>
        <main>
            <div className='main-container'>
                <section>
                    <h1 >Details</h1>
                    <div className='seperation-line'></div>
                    <Details eventId={eventId}/>
                    <Link href="/events"><a className='return-button' >Return</a></Link>
                </section>
            </div>
        </main>
    </>
  )
}
